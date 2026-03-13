# User Stories — Avril Portfolio

---

## US-001: View Language Selector

**Description:** As a user, I want to switch between Spanish and English so that I can view the portfolio in my preferred language.

**Acceptance Criteria:**

**Scenario 1: Switching to available language**
- Given the user is on any section of the portfolio
- When the user clicks the language toggle button (EN/ES)
- Then the system updates all visible text content to the selected language

**Scenario 2: Language is maintained while navigating**
- Given the user has selected a language
- When the user scrolls between sections
- Then the system maintains the selected language across all sections

---

## US-002: View Hero Section with Introduction

**Description:** As a recruiter, I want to see a clear introduction about the developer so that I can quickly understand their background and role.

**Acceptance Criteria:**

**Scenario 1: Hero section displays with valid content**
- Given the user navigates to the portfolio
- When the hero section loads
- Then the system displays name, title, profile photo, brief introduction, CTA buttons, and social media icons

**Scenario 2: Click "Download CV" button**
- Given the hero section is displayed
- When the user clicks the "Download CV" button
- Then the system initiates the PDF download of the developer's CV

**Scenario 3: Click "Contact" button**
- Given the hero section is displayed
- When the user clicks the "Contact" button
- Then the system smoothly scrolls to the Contact section

---

## US-003: Download CV

**Description:** As a recruiter, I want to download the developer's CV in PDF format so that I can share it with my team and keep a record.

**Acceptance Criteria:**

**Scenario 1: CV download with valid file**
- Given the user clicks the "Download CV" button
- When the PDF file is available
- Then the system downloads a PDF file named with the developer's name

**Scenario 2: CV download with missing file**
- Given the user clicks the "Download CV" button
- When the file is not available
- Then the system displays an error message suggesting the user contact the developer directly

---

## US-004: View About Section

**Description:** As a visitor, I want to read detailed information about the developer so that I can understand their background and career goals.

**Acceptance Criteria:**

**Scenario 1: About section displays with complete information**
- Given the user scrolls to the About section
- When the section loads
- Then the system displays the developer's biography and career objectives

---

## US-005: View Projects List

**Description:** As a recruiter, I want to see all the developer's projects so that I can evaluate their technical skills and experience.

**Acceptance Criteria:**

**Scenario 1: Projects list displays when projects exist**
- Given there are projects in the portfolio
- When the user navigates to the Projects section
- Then the system displays all projects in a carousel, each with title, description, preview image, and technology badges

**Scenario 2: Projects list displays when no projects exist**
- Given there are no projects in the portfolio
- When the user navigates to the Projects section
- Then the system displays a message indicating no projects are available yet

---

## US-006: Access Project GitHub Repository

**Description:** As a developer, I want to access the source code of a project so that I can review the code quality and architecture.

**Acceptance Criteria:**

**Scenario 1: GitHub link is valid and accessible**
- Given a project card is displayed
- When the user clicks the GitHub icon on the project card
- Then the system opens the repository in a new browser tab

---

## US-007: Access Deployed Project

**Description:** As a recruiter, I want to access the live version of a project so that I can test the application in action.

**Acceptance Criteria:**

**Scenario 1: Deploy link is valid and accessible**
- Given a project card is displayed
- When the user clicks the deploy icon on the project card
- Then the system opens the live application in a new browser tab

---

## US-008: View Skills Section

**Description:** As a developer, I want to see the developer's technical skills organized by categories so that I can identify shared technologies and expertise areas.

**Acceptance Criteria:**

**Scenario 1: Skills section displays with organized categories**
- Given the user navigates to the Skills section
- When the section loads
- Then the system displays skills organized in four categories: Programming Languages, Frameworks & Libraries, Software & Tools, and Soft Skills

**Scenario 2: Skills are displayed as badges**
- Given the Skills section is displayed
- When the user views the section
- Then the system shows each skill as a visual badge with an icon and label

---

## US-009: View Contact Section

**Description:** As a potential client, I want to easily find contact information so that I can reach out to the developer about a potential project.

**Acceptance Criteria:**

**Scenario 1: Contact section displays all contact options**
- Given the user navigates to the Contact section
- When the section loads
- Then the system displays email, WhatsApp, and LinkedIn with their respective icons

**Scenario 2: Contact action buttons are functional**
- Given the Contact section is displayed
- When the user clicks "Send email"
- Then the system opens the default email client with the developer's address pre-filled

**Scenario 3: WhatsApp button is functional**
- Given the Contact section is displayed
- When the user clicks "WhatsApp message"
- Then the system opens WhatsApp with a pre-filled message to the developer's number

---

## US-010: Access Social Media Profiles

**Description:** As a visitor, I want to access the developer's social media profiles so that I can follow their work and professional updates.

**Acceptance Criteria:**

**Scenario 1: Social media icons are displayed in hero and footer**
- Given the user is on the portfolio
- When the user views the hero section or footer
- Then the system displays LinkedIn, GitHub, and Instagram icons

**Scenario 2: Social media links open correctly**
- Given the social media icons are displayed
- When the user clicks any social media icon
- Then the system opens the respective profile in a new browser tab

---

## US-011: Navigate Between Sections

**Description:** As a user, I want to navigate smoothly between different sections of the portfolio so that I can explore all content without confusion.

**Acceptance Criteria:**

**Scenario 1: Navigation menu is accessible on desktop**
- Given the user is on the portfolio on a desktop (>768px)
- When the user views the top navigation bar
- Then the system displays a horizontal menu with: Home, About me, Portfolio, Skills, Contact

**Scenario 2: Navigation menu is accessible on mobile**
- Given the user is on the portfolio on a mobile device (≤768px)
- When the user taps the hamburger menu icon
- Then the system displays a dropdown with all navigation links

**Scenario 3: Navigation links scroll to section**
- Given the user clicks any navigation link
- When the click is registered
- Then the system smoothly scrolls to the corresponding section

---

## US-012: Navigate Project Carousel

**Description:** As a visitor, I want to navigate between projects using the carousel so that I can explore all projects without scrolling.

**Acceptance Criteria:**

**Scenario 1: Carousel navigation with dot indicators**
- Given the projects section is displayed with multiple projects
- When the user clicks a dot indicator below the carousel
- Then the system displays the corresponding project as the centered, highlighted card

**Scenario 2: Carousel displays single project correctly**
- Given there is only one project in the portfolio
- When the carousel loads
- Then the system displays the single project centered and hides the dot indicators

**Scenario 3: Carousel is usable on mobile**
- Given the user is on a mobile device
- When the user views the projects section
- Then the system displays one project card per view with visible dot indicators

---

## US-013: Mobile Responsive Design

**Description:** As a recruiter using a mobile device, I want the portfolio to be fully usable on mobile so that I can review the developer's work from my phone.

**Acceptance Criteria:**

**Scenario 1: Hamburger menu appears on mobile**
- Given the user is on a device with screen width ≤768px
- When the page loads
- Then the system replaces the horizontal nav with a hamburger menu icon

**Scenario 2: Projects display in single column on mobile**
- Given the user views the Projects section on mobile
- When the carousel renders
- Then the system displays one project card at a time, full width

**Scenario 3: Hero section is readable on mobile**
- Given the user views the Hero section on mobile
- When the section renders
- Then the system displays full-width CTA buttons and text with font size ≥16px

**Scenario 4: Touch targets meet minimum size**
- Given the user is navigating on a touch device
- When the user interacts with any button or link
- Then all interactive elements have a touch target of at least 44x44px