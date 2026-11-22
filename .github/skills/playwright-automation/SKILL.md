
---
name: playwright-automation
description: Use Playwright MCP for browser automation, UI inspection, debugging, and TypeScript Playwright framework development.
---

# Playwright Automation Skill

## Project Information
- Framework: Playwright
- Language: TypeScript
- Browser: Chromium
- Application: https://www.saucedemo.com
- Architecture: Page Object Model (POM)

## MCP Instructions

1. Use Playwright MCP tools for browser interactions.
2. Open the browser using MCP.
3. Inspect page elements before interacting.
4. Use snapshots to understand the page structure.
5. Prefer accessible locators such as getByRole,
   getByLabel and getByText.
6. Verify every important action.
7. Capture screenshots when required.
8. Never use Playwright Test CLI when the task
   specifically requests MCP browser execution.

## Coding Standards

1. Use TypeScript only.
2. Follow Page Object Model.
3. Keep locators inside Page classes.
4. Keep test data inside config/testData.ts.
5. Use reusable methods.
6. Avoid hardcoded waits.
7. Use expect assertions.
8. Keep tests independent.

## Project Pages
- LoginPage.ts
- InventoryPage.ts
- CartPage.ts
- CheckoutPage.ts

## Testing Guidelines
- Verify login functionality.
- Verify product sorting.
- Verify cart functionality.
- Verify checkout.
- Verify order confirmation.
- Capture failures with screenshots and traces.

## Important
Before creating or modifying files:
- Inspect the existing project structure.
- Reuse existing Page Objects.
- Do not overwrite existing code without checking it.
- Explain changes before making major modifications.
