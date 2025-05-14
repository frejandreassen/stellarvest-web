# StellarVest Website Requirements Specification

## Project Overview
This document outlines the requirements for completing the StellarVest Asset Management website. The project is built using Next.js with Tailwind CSS for styling. The homepage and internationalization (PT/EN) features have already been implemented. This specification focuses on the remaining sub-pages and their requirements.

## Technical Stack
- **Frontend Framework**: Next.js
- **CSS Framework**: Tailwind CSS
- **Internationalization**: Already implemented (Portuguese and English)

## Global Requirements

### Navigation Structure
The website's navigation should maintain the following structure as per the requirements document:

```
- Home
- About
  - Our Company
  - Our Team
  - Careers
- Services
  - Loans Management
  - Real Estate Asset Management
  - Advisory
  - Securitization Vehicle
- Contact
- Login (External portals access)
```

### Language Support
- The website must maintain the existing language toggle between Portuguese (PT) and English (EN)
- All content must be available in both languages
- Language switching should preserve the current page/section the user is viewing

### Responsive Design
- All pages must be fully responsive and provide optimal viewing experience across devices (mobile, tablet, desktop)
- Navigation menu should collapse into a hamburger menu on mobile devices

### General Design Guidelines
- Color Scheme: Maintain the existing gold/cream/white/brown color palette as seen in the current implementation
- Typography: Maintain consistency with existing font choices
- Maintain a sophisticated, professional design that reflects the company's positioning
- The specific layout design in the PDF should not be followed, but the content and sections should be implemented

## Page-Specific Requirements

### 1. About Us Pages

#### 1.1 Our Company Page

**Content Requirements:**
- "Who We Are" section introducing StellarVest Asset Management
  - Highlight the aim of maximizing asset value
  - Mention the integrated and efficient approach
  - Describe the range of services from analysis to after-sales
- Company timeline showing key milestones:
  - 2017: Acquisition of Oitante's servicing platform
  - 2018: doValue Group acquires Altamira Asset Management
  - 2021: Rebranding of Altamira Portugal to doValue & Incorporation of ZARCO STC
  - 2024: Albatris acquires doValue Portugal & Rebranding to StellarVest
- "Our Approach" section describing the End-to-End process of NPL and REO Management
  - Detail the 360° service with cross-functional coordination
  - List and describe the five main stages of their approach:
    1. Loans (assessments, valuation)
    2. REO Conversion (regularization strategy)
    3. Asset Clean-Up & REO Management
    4. Publication & Sale
    5. Closing
- Mission and Vision statements
- "Why choose StellarVest Asset Management?" section

**Functional Requirements:**
- Animated or interactive timeline for the company history
- Smooth scrolling between sections
- Appropriate spacing and visual hierarchy to enhance readability

#### 1.2 Our Team Page

**Content Requirements:**
- Introduction text about the team's collective expertise and approach
- Management team profiles with:
  - Professional photo
  - Name
  - Position/Title
  - Years of experience
  - Previous companies/experience
  - Education details
- Currently featuring:
  - Ruben Sommer (CEO)
  - João Ribeiro (Real Estate Director)
  - Pedro Guerreiro (Corporate Director & CFO)
- "Talk to our management team" call-to-action button

**Functional Requirements:**
- Responsive grid layout for team members
- Hover effects on team member cards
- Contact button linking to a contact form specifically for reaching the management team

#### 1.3 Careers Page

**Content Requirements:**
- "Join StellarVest" heading and introduction
- "Why Join Us?" section with four key benefits:
  - Career Growth & Development
  - Innovation & Technology
  - Collaborative Culture
  - Real Impact
- Areas of opportunity listing:
  - Asset & Investment Management
  - Financial Analysis & Risk Management
  - Technology & Data Analytics
  - Marketing & Business Development
  - Compliance & Regulatory Affairs
- Call-to-action for applications
- Contact information for applications (email: recrutamento@stellarvest.pt)

**Functional Requirements:**
- Option to upload CV directly through the site (if feasible)
- Link to company website for more opportunities
- Contact form optimized for job inquiries

### 2. Services Pages

#### 2.1 Loans Management

**Content Requirements:**
- Introduction to Loans Management at StellarVest
  - Experience in credit recovery, servicing, and outsourcing
  - Types of loans handled (performing, sub-performing, and non-performing)
- "Why StellarVest?" section highlighting:
  - Proven track record in Corporate Secured Debt
  - Tailored loan recovery strategies
  - Comprehensive loan management approach
- Key achievements/results section:
  - €23M recovered (since 2018)
  - €700M in assets under management
- "Our Approach" section emphasizing:
  - Client-focused solutions
  - Integrated asset and legal management
  - Efficient and strategic debt recovery
- "Your Assets, Our Expertise" tagline
- "Talk to Us" call-to-action

**Functional Requirements:**
- Visual presentation of key statistics
- Interactive elements showing the loan management process
- Contact form specifically for loan management inquiries

#### 2.2 Real Estate Asset Management

**Content Requirements:**
- Introduction to Real Estate Asset Management service
  - Focus on maximizing asset value through integrated and efficient approach
  - Comprehensive description of services covering analysis, strategic design, development, management, sales, and after-sales of real estate assets
  - Emphasis on tailoring solutions to each investor's specific objectives

- "Why StellarVest?" section with detailed differentiators:
  - Robust real estate platform capable of managing all property types (residential, commercial, land, etc.)
  - Specialized internal teams for asset management, development, and leasing
  - Strong track record in transforming and managing complex real estate assets with challenging constraints
  - Experience with properties having licensing, performance, and construction restrictions
  - Nationwide coverage across Portugal

- Results and achievements section with specific metrics:
  - Real Estate Sales: €580M (since 2018) - include breakdown by property type if available
  - Assets Under Management (AUM): Over €1.2B (since 2018)
  - Number of Assets Managed: Over 6,000 individual properties
  - Rental Management: €7M generated annually through more than 120 active leases
  - Building Maintenance: Managing CAPEX and OPEX with over 1,100 specific interventions
  - Include year-over-year growth statistics if available

- "Our Approach" section with detailed methodology:
  - Asset Best Value driven strategies with ROI focus
  - Strong real estate platform architecture explanation
  - Specialized internal teams structure - detailing the collaboration between asset management, development & leasing teams
  - Detailed process flow for handling complex real estate assets with licensing, performance and construction restrictions
  - Explanation of real-time data reporting system customized for each client type

- Granular Commercialization Process breakdown with 4 key phases:
  1. **Onboarding & Asset Clean Up**
     - Detailed asset intake process
     - Initial assessment methodology
     - Document regularization process
     - Technical condition assessment
  
  2. **Brokers Management**
     - Broker selection criteria
     - Performance ranking methodology
     - Broker rotation policy
     - Quality control mechanisms
     - KPI tracking systems for brokers
  
  3. **Leads Management**
     - Lead generation strategies
     - Qualification process
     - Tracking system
     - Conversion optimization techniques
     - Follow-up protocols
  
  4. **Real Estate Team Structure**
     - Team composition and expertise areas
     - Specialized call center support functions
     - Coverage capabilities (nationwide reach)
     - Size and geographical distribution

- Structure section highlighting:
  - Commercial Team structure and broker network management
  - Specialized internal teams for technical and judicial asset clean-up
  - IT tools for portfolio management (boarding to collections, maintenance, etc.)
  - Anti-Money Laundering (AML) internal services
  - Asset allocation strategies by type, location, and investor
  - Special expertise in challenging property types (fire sales, partial ownership, occupied properties)

- Focus section emphasizing:
  - Asset value optimization methodology
  - Investor-driven customization
  - Deal-driven commercial approach
  - Advertising policy and reach
  - Proactive commercial approach management
  - Regular campaign strategy

**Functional Requirements:**
- Interactive property portfolio showcase with filtering capabilities
- Dynamic statistics dashboard showing real-time performance metrics
- Interactive process flow diagram explaining the real estate management methodology
- Case studies or success stories with before/after comparisons
- Virtual property tour integration capability (for selected properties)
- Contact form specifically designed for real estate management inquiries
- Broker portal integration/explanation
- Interactive map showing property management coverage across Portugal
- Downloadable real estate asset management brochure

#### 2.2.1 Servicing & Property Management

**Content Requirements:**
- Comprehensive introduction to StellarVest's servicing solutions:
  - Emphasis on optimization of asset management
  - Explanation of seamless operations framework
  - Focus on allowing investors and financial institutions to focus on strategic growth

- Detailed breakdown of servicing expertise in two main categories:

  1. **Property Management Services**
     - Rental Management
       - Tenant acquisition process
       - Rent collection procedures
       - Tenant relation management
       - Lease renewal strategies
       - Arrears management approach
     - Condominium Management
       - Common area maintenance procedures
       - Owner association management
       - Meeting organization and documentation
       - Fee collection and administration
     - Property Maintenance
       - Preventive maintenance programs
       - Corrective maintenance protocols
       - Vendor management system
       - Emergency response procedures
       - Quality control mechanisms
     - Tenant Satisfaction Initiatives
       - Communication channels
       - Issue resolution process
       - Tenant retention strategies
     - Asset Value Preservation
       - Property condition monitoring
       - Value enhancement strategies
       - Preventive intervention timing
     - Cost Efficiency Programs
       - Expense optimization approaches
       - Vendor consolidation strategies
       - Energy efficiency initiatives

  2. **Legal & Occupied Asset Management**
     - Regularization Process
       - Document verification and correction
       - Legal compliance procedures
       - Title clearing methodology
       - Permit and license management
     - Judicial Management of Occupied Properties
       - Legal strategy development
       - Court representation approach
       - Eviction process management (when required)
       - Negotiation with occupants
       - Alternative resolution strategies
     - Compliance Risk Management
       - Regulatory adherence verification
       - Documentation maintenance
       - Reporting obligations
     - Contracting Process Oversight
       - Contract development procedures
       - Negotiation support services
       - Documentation management
       - Transparency assurance mechanisms
       - Legal security enhancements

- "Why Choose StellarVest for Servicing?" section:
  - Efficiency & Expertise: Detail the professional team composition and specializations
  - End to End Solutions: Explain the holistic approach covering the entire asset lifecycle
  - Risk & Compliance Management: Outline the regulatory adherence and strategic asset protection
  - Client-Centric Approach: Describe the customization of servicing solutions

- Team section featuring key personnel:
  - João Ribeiro (Managing Director & Group Head)
  - Mónica Cohen (Portfolio Manager)
  - Sara Lopes (Portfolio Manager)
  - Include brief descriptions of responsibilities and expertise areas

**Functional Requirements:**
- Interactive service selection tool to help users identify their specific needs
- Dynamic comparison charts showing StellarVest's servicing advantages
- Client portal demo/preview showcasing reporting capabilities
- Testimonials carousel from existing servicing clients
- Interactive FAQ section addressing common servicing questions
- Downloadable service descriptions and capabilities documents
- Contact form with service-specific options

#### 2.3 Advisory Services

**Content Requirements:**
- Introduction to Advisory Services:
  - Due diligence services for NPL, PL, and REO portfolios
  - Real estate asset valuations
  - Financial models and business plans creation
- "Why StellarVest?" section highlighting the approach and philosophy
- "Our Approach" section detailing:
  - Due Diligence process
  - Asset Valuation methodology
  - Financial Modeling & Business Planning
- Real estate underwriting services list:
  - Property information analysis
  - Market research
  - Financial modeling
  - Ready-to-use Excel models
  - Asset Summary Reports
  - Income and expense analysis
  - DCF analyses
  - Portfolio-level analysis
  - Reporting capabilities
- "Tailored Approach" section detailing the customization process

**Functional Requirements:**
- Downloadable advisory service brochures (if available)
- Case studies or testimonials from advisory clients
- Contact form specific to advisory services

#### 2.4 Securitization Vehicle

**Content Requirements:**
- Introduction to Zarco STC, SA:
  - Purpose and establishment details
  - Approval by Portuguese Market Authority (CMVM)
- "Why Zarco STC?" section highlighting:
  - Independence
  - Dedication to securitization
  - Segregation of activities
- "Our Approach" section detailing:
  - Reports to the Bank of Portugal
  - Negotiation and recovery potential
  - Financial information provision
- Visual representation of the securitization process:
  - Bank → SPV → Noteholders
  - Loans/Assets and Cash flow
- Link to additional information

**Functional Requirements:**
- Interactive diagram explaining the securitization process
- Downloadable information about Zarco STC
- Contact form for securitization inquiries

### 3. Contact Page

**Content Requirements:**
- Contact form with fields for:
  - Name
  - Surname
  - Email
  - Phone number
  - Department selection (dropdown with options like Management Team, Loan's Team, etc.)
  - Message/Description
  - Consent checkbox for terms and conditions
  - CAPTCHA for spam prevention
- Office location details:
  - Lisbon office: Av. Da Republica 90, 2 Esq. | 1600-206 Lisboa
  - Additional office locations if applicable
- Map integration showing office locations
- General contact information (phone, email)
- Office hours information

**Functional Requirements:**
- Fully functional contact form with validation
- Form submission handling with confirmation message
- Interactive map (Google Maps or similar) with markers for office locations
- Department-based routing for inquiries
- Mobile-responsive contact information

### 4. Footer

**Content Requirements:**
- Company copyright information
- Legal links:
  - Privacy Policy
  - Cookie Policy
  - Terms and conditions
  - Whistleblowing channel
  - Privacy notice - Debt management
- Support section
- Company section with links to About, Services, and Contact
- Language toggle (if not in the header)

**Functional Requirements:**
- Consistent footer across all pages
- Properly functioning links to all policies and pages
- Mobile-responsive layout

## Additional Requirements

### Images

1. Homepage:
   - Maintain existing videos
   - Use a balanced combination of:
     - Images of Portugal (Lisbon, Porto, Madeira, etc.)
     - Management activities imagery
     - Stylized building photographs

2. Landing Pages:
   - Each landing page should feature one or two relevant images
   - Images should be professional and align with the sophisticated brand image
   - High-quality, optimized images for web performance

### Background Images
- Alternate section backgrounds between white and selected themed imagery
- Maintain consistent visual language across all background elements

### Call-to-Action Elements
- Strategic placement of CTAs throughout the site
- Consistent styling for all CTA buttons
- Clear and action-oriented button text

### Login Functionality
- Maintain the Login button that directs to external portals:
  - Brokers Portal
  - RE Portal
  - Investor Portal
  - ZARCO ECT.PT

## Technical Implementation Considerations

1. **Performance Optimization**
   - Optimize image loading with Next.js Image component
   - Implement lazy loading for below-the-fold content
   - Minimize main thread work and unnecessary JavaScript

2. **SEO Considerations**
   - Implement proper meta tags for all pages
   - Ensure semantic HTML structure
   - Create a sitemap.xml file
   - Implement structured data where appropriate

3. **Accessibility**
   - Ensure WCAG 2.1 AA compliance
   - Implement proper ARIA attributes where needed
   - Ensure proper color contrast ratios
   - Keyboard navigation support

4. **Analytics**
   - Implement analytics tracking for user behavior analysis
   - Set up conversion tracking for contact forms and CTAs

## Deliverables

1. Completed Next.js codebase with all required pages and functionality
2. Documentation on component structure and usage
3. Content management instructions (if applicable)
4. Performance and accessibility test results

## Timeline

[To be determined based on project planning]

---

This specification should be reviewed regularly during development to ensure all requirements are being addressed. Any deviations or additional requirements should be documented and approved.