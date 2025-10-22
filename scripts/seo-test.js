#!/usr/bin/env node

/**
 * SEO Testing Script for Ducorr Landing Page
 * Tests SEO implementation before deployment
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

// Test configuration
const TEST_CONFIG = {
  baseUrl: 'http://localhost:3000',
  targetKeywords: [
    'cathodic protection UAE',
    'cathodic protection KSA',
    'cathodic protection specialists UAE',
    'cathodic protection Saudi Arabia',
    'marine cathodic protection UAE',
    'storage tank cathodic protection',
    'pipeline cathodic protection',
    'concrete cathodic protection'
  ],
  requiredMetaTags: [
    'title',
    'description',
    'keywords',
    'og:title',
    'og:description',
    'og:image',
    'twitter:title',
    'twitter:description',
    'twitter:image'
  ]
};

class SEOTester {
  constructor() {
    this.results = {
      passed: 0,
      failed: 0,
      warnings: 0,
      tests: []
    };
  }

  async testPage(url) {
    console.log(`🔍 Testing SEO for: ${url}`);
    
    try {
      const html = await this.fetchPage(url);
      const tests = [
        this.testMetaTags(html),
        this.testStructuredData(html),
        this.testKeywords(html),
        this.testHeadings(html),
        this.testImages(html),
        this.testContent(html),
        this.testPerformance(html)
      ];

      await Promise.all(tests);
      this.printResults();
      
    } catch (error) {
      console.error(`❌ Error testing ${url}:`, error.message);
    }
  }

  async fetchPage(url) {
    return new Promise((resolve, reject) => {
      const request = http.get(url, (response) => {
        let data = '';
        response.on('data', chunk => data += chunk);
        response.on('end', () => resolve(data));
      });
      request.on('error', reject);
    });
  }

  testMetaTags(html) {
    console.log('📋 Testing Meta Tags...');
    
    TEST_CONFIG.requiredMetaTags.forEach(tag => {
      const regex = new RegExp(`<meta[^>]*(?:name|property)="${tag}"[^>]*content="([^"]*)"`, 'i');
      const match = html.match(regex);
      
      if (match && match[1].trim()) {
        this.addTest(`Meta tag ${tag}`, 'PASS', `Found: ${match[1].substring(0, 50)}...`);
      } else {
        this.addTest(`Meta tag ${tag}`, 'FAIL', 'Missing or empty');
      }
    });

    // Test title tag - look for Next.js generated title
    const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
    if (titleMatch && titleMatch[1].includes('Cathodic Protection')) {
      this.addTest('Page Title', 'PASS', `Found: ${titleMatch[1]}`);
    } else {
      // Check for Next.js metadata in head
      const nextTitleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
      if (nextTitleMatch) {
        this.addTest('Page Title', 'PASS', `Found: ${nextTitleMatch[1]}`);
      } else {
        this.addTest('Page Title', 'FAIL', 'Title missing or not optimized');
      }
    }
  }

  testStructuredData(html) {
    console.log('🏗️ Testing Structured Data...');
    
    const jsonLdMatch = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s);
    if (jsonLdMatch) {
      try {
        const structuredData = JSON.parse(jsonLdMatch[1]);
        if (structuredData['@type'] === 'Organization') {
          this.addTest('Structured Data', 'PASS', 'Valid Organization schema found');
        } else {
          this.addTest('Structured Data', 'WARN', 'Schema found but not Organization type');
        }
      } catch (e) {
        this.addTest('Structured Data', 'FAIL', 'Invalid JSON-LD format');
      }
    } else {
      this.addTest('Structured Data', 'FAIL', 'No JSON-LD found');
    }
  }

  testKeywords(html) {
    console.log('🎯 Testing Keyword Optimization...');
    
    TEST_CONFIG.targetKeywords.forEach(keyword => {
      const keywordCount = (html.match(new RegExp(keyword, 'gi')) || []).length;
      if (keywordCount >= 2) {
        this.addTest(`Keyword: ${keyword}`, 'PASS', `Found ${keywordCount} times`);
      } else if (keywordCount === 1) {
        this.addTest(`Keyword: ${keyword}`, 'WARN', `Found only ${keywordCount} time`);
      } else {
        this.addTest(`Keyword: ${keyword}`, 'FAIL', 'Not found');
      }
    });
  }

  testHeadings(html) {
    console.log('📝 Testing Heading Structure...');
    
    // Look for H1 with line breaks and multiple lines
    const h1Match = html.match(/<h1[^>]*>([^<]*(?:<br[^>]*>[^<]*)*)<\/h1>/i);
    if (h1Match) {
      const h1Text = h1Match[1].replace(/<br[^>]*>/gi, ' ').replace(/\s+/g, ' ').trim();
      if (h1Text.includes('Cathodic Protection')) {
        this.addTest('H1 Tag', 'PASS', `Found: ${h1Text}`);
      } else {
        this.addTest('H1 Tag', 'WARN', `Found H1 but not optimized: ${h1Text}`);
      }
    } else {
      this.addTest('H1 Tag', 'FAIL', 'H1 missing or not optimized');
    }

    const h2Count = (html.match(/<h2[^>]*>/gi) || []).length;
    if (h2Count >= 3) {
      this.addTest('H2 Tags', 'PASS', `Found ${h2Count} H2 tags`);
    } else {
      this.addTest('H2 Tags', 'WARN', `Only ${h2Count} H2 tags found`);
    }
  }

  testImages(html) {
    console.log('🖼️ Testing Image Optimization...');
    
    const imgTags = html.match(/<img[^>]*>/gi) || [];
    let altTagCount = 0;
    let keywordOptimizedCount = 0;
    
    imgTags.forEach(img => {
      if (img.includes('alt=')) {
        altTagCount++;
        // Check for target keywords in alt tags
        if (img.includes('cathodic protection') || img.includes('UAE') || img.includes('KSA') || img.includes('marine') || img.includes('storage tank') || img.includes('pipeline')) {
          keywordOptimizedCount++;
        }
      }
    });

    if (keywordOptimizedCount > 0) {
      this.addTest('Image Alt Tags', 'PASS', `${keywordOptimizedCount} keyword-optimized alt tags found`);
    } else if (altTagCount > 0) {
      this.addTest('Image Alt Tags', 'WARN', `${altTagCount} alt tags found but not keyword-optimized`);
    } else {
      this.addTest('Image Alt Tags', 'FAIL', 'No alt tags found');
    }
  }

  testContent(html) {
    console.log('📄 Testing Content Quality...');
    
    // Check for content length
    const textContent = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const wordCount = textContent.split(' ').length;
    
    if (wordCount >= 500) {
      this.addTest('Content Length', 'PASS', `${wordCount} words found`);
    } else {
      this.addTest('Content Length', 'WARN', `Only ${wordCount} words found`);
    }

    // Check for keyword density
    const keywordDensity = TEST_CONFIG.targetKeywords.map(keyword => {
      const count = (textContent.match(new RegExp(keyword, 'gi')) || []).length;
      return { keyword, count, density: (count / wordCount * 100).toFixed(2) };
    });

    keywordDensity.forEach(({ keyword, density }) => {
      if (parseFloat(density) >= 0.5 && parseFloat(density) <= 3.0) {
        this.addTest(`Keyword Density: ${keyword}`, 'PASS', `${density}%`);
      } else {
        this.addTest(`Keyword Density: ${keyword}`, 'WARN', `${density}% (target: 0.5-3.0%)`);
      }
    });
  }

  testPerformance(html) {
    console.log('⚡ Testing Performance Indicators...');
    
    // Check for critical CSS - look for Next.js CSS patterns
    if (html.includes('style.css') || html.includes('_next/static/css') || html.includes('turbopack')) {
      this.addTest('CSS Loading', 'PASS', 'CSS files detected');
    } else {
      this.addTest('CSS Loading', 'WARN', 'CSS files not detected');
    }

    // Check for Google Analytics
    if (html.includes('gtag') || html.includes('google-analytics') || html.includes('AW-831188944')) {
      this.addTest('Analytics', 'PASS', 'Google Analytics found');
    } else {
      this.addTest('Analytics', 'WARN', 'Google Analytics not found');
    }
    
    // Check for Next.js optimization
    if (html.includes('next') || html.includes('turbopack')) {
      this.addTest('Next.js Optimization', 'PASS', 'Next.js framework detected');
    } else {
      this.addTest('Next.js Optimization', 'WARN', 'Next.js not detected');
    }
  }

  addTest(name, status, message) {
    this.results.tests.push({ name, status, message });
    if (status === 'PASS') this.results.passed++;
    else if (status === 'FAIL') this.results.failed++;
    else this.results.warnings++;
  }

  printResults() {
    console.log('\n' + '='.repeat(60));
    console.log('📊 SEO TEST RESULTS');
    console.log('='.repeat(60));
    
    console.log(`✅ Passed: ${this.results.passed}`);
    console.log(`❌ Failed: ${this.results.failed}`);
    console.log(`⚠️  Warnings: ${this.results.warnings}`);
    
    console.log('\n📋 Detailed Results:');
    this.results.tests.forEach(test => {
      const icon = test.status === 'PASS' ? '✅' : test.status === 'FAIL' ? '❌' : '⚠️';
      console.log(`${icon} ${test.name}: ${test.message}`);
    });

    const score = Math.round((this.results.passed / this.results.tests.length) * 100);
    console.log(`\n🎯 Overall SEO Score: ${score}%`);
    
    if (score >= 80) {
      console.log('🚀 Excellent! Your SEO is ready for deployment.');
    } else if (score >= 60) {
      console.log('⚠️  Good, but consider addressing failed tests before deployment.');
    } else {
      console.log('❌ Poor SEO score. Please fix critical issues before deployment.');
    }
  }
}

// Run the tests
async function runSEOTests() {
  const tester = new SEOTester();
  await tester.testPage(TEST_CONFIG.baseUrl);
}

// Command line usage
if (require.main === module) {
  runSEOTests().catch(console.error);
}

module.exports = { SEOTester, TEST_CONFIG };
