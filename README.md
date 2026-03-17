# AI-Powered Issue Tracking Platform (Frontend Prototype)

## Overview

This project is a frontend prototype of an AI-powered issue tracking platform inspired by Linear, Jira, and GitHub Issues.

It demonstrates core user interface flows for issue management, project tracking, and AI-assisted summaries.

The application currently focuses on frontend architecture and interactive UI behavior using mock data.

---

## Tech Stack Used

### Frontend

* React.js
* React Router DOM
* CSS

### Data Handling

* Local component state
* Dummy JSON data

---

## Setup Instructions

### Clone Repository

```bash id="nmjlwm"
git clone https://github.com/yourusername/ai-issue-tracker.git
cd ai-issue-tracker/frontend
```

### Install Dependencies

```bash id="9tjlwm"
npm install
```

### Run Project

```bash id="jlwmt7"
npm run dev
```

### Open in Browser

```text id="5jlwmx"
http://localhost:5173
```

---

## Architecture Overview

The project follows a component-based frontend architecture.

```text id="djlwm0"
src/
 ├── components/
 ├── pages/
 ├── data/
 ├── App.jsx
 ├── main.jsx
```

### Components

* Navbar
* Sidebar
* ProjectCard
* IssueCard
* IssueForm
* KanbanBoard
* SearchBar
* CommentBox
* ActivityTimeline
* AISummary

### Pages

* Dashboard
* ProjectPage
* IssuePage

### Data Layer

Mock data is stored in:

```text id="3jlwmk"
src/data/dummyData.js
```

---

## API Documentation (Frontend Simulation)

The current version simulates expected backend behavior using frontend state.

Planned API structure:

### Authentication

POST /auth/signup
POST /auth/login

### Projects

GET /projects
POST /projects

### Issues

GET /issues
POST /issues
PUT /issues/:id
DELETE /issues/:id

### Comments

POST /comments

### AI Summary

POST /ai/summarize

---

## Design Decisions

### Why React

React was selected for reusable component architecture and fast UI composition.

### Why Frontend First

The frontend prototype was prioritized to demonstrate full product flow before backend integration.

### Why Dummy Data

Dummy data allows quick simulation of issue tracking behavior without API dependency.

### Why Component Separation

Features are separated into reusable components for easier scaling.

### Why Kanban Included

Kanban board improves usability and reflects modern issue-tracking products.

### Why AI Summary Simulated

AI summary interaction is mocked to represent future integration.

---

## Features Implemented

* Dashboard
* Project Navigation
* Issue Cards
* Create Issue
* Delete Issue
* Change Status
* Kanban Board
* Search and Filter
* Comments Section
* Activity Timeline
* AI Summary Interaction

---

## Future Improvements

* Backend integration
* Database persistence
* Authentication
* Real AI API integration
* Drag and drop Kanban
* Role-based permissions

---
