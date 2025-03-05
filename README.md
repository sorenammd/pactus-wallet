# Pactus Wallet

A modern, secure cryptocurrency wallet for the Pactus blockchain.

## Project Overview

Pactus Wallet is a cross-platform wallet solution for managing digital assets on the Pactus blockchain. Built with security and usability in mind, it provides a seamless experience for users to create wallets, manage accounts, and perform transactions.

## Project Structure

This project is structured as a monorepo using Yarn workspaces:

```
pactus-wallet/
├── apps/                    # User-facing applications
│   └── web/                 # Web wallet application (Next.js)
├── packages/                # Shared libraries and modules
│   ├── wallet/              # Core wallet functionality
│   └── utils/               # Shared utilities
└── tests/                   # Test suites
```

## Key Technologies

### Core
- **TypeScript** - For type safety across the codebase
- **Yarn** - Package manager with Workspaces support
- **Turborepo** - Build system for monorepos

### Web Application
- **Next.js** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **next-themes** - Theme management for Next.js

### Wallet Core
- **TrustWallet Core** - For cryptographic operations

## Getting Started

### Prerequisites
- Node.js (v18+)
- Yarn (v4+)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pactus-project/pactus-wallet.git
cd pactus-wallet
```

2. Install dependencies:
```bash
yarn install
```

### Running the Web Wallet
```bash
# From the root directory
yarn build:web
yarn workspace web dev

# Or navigate to web app directory
cd apps/web
yarn dev
```

## Development

### Build Commands
```bash
# Build all packages and applications
yarn build

# Build only the web application
yarn build:web

# Build only the packages
yarn build:pkg
```

### Project Structure Best Practices

- Keep related code in the appropriate package
- Share common functionality through packages
- Include comprehensive tests for all code
- Document components and APIs using JSDoc
- Follow the established coding style and conventions

## Recommended Libraries

### State Management
- **Zustand** - For global state management
- **React Hook Form** - For form handling
- **Zod** - For schema validation

### API Integration
- **TanStack Query** - For data fetching and caching
- **Axios** - For HTTP requests

### UI Components


### Testing
- **Jest** - For unit and integration testing
- **Testing Library** - For component testing

## Contributing

We welcome contributions to the Pactus Wallet project! Please follow these guidelines to ensure your contributions align with our standards.

### Before You Contribute

1. **Understand the Project**: Familiarize yourself with the project goals and architecture
2. **Check Existing Issues**: See if there's already an issue for what you want to work on
3. **Discuss Major Changes**: For significant changes, open an issue first to discuss with maintainers

### Code Guidelines

* Follow clean code principles and TypeScript best practices
* Maintain type safety throughout the codebase
* Write comprehensive tests for new code or changes
* Ensure all tests pass before submitting a pull request
* Maintain consistent code style using ESLint and Prettier

### Commit Guidelines

We use Conventional Commits format for commit messages and PR titles. Follow these rules:

#### Commit Types

| Type     | Description                                      |
| -------- | ------------------------------------------------ |
| fix      | A bug fix                                        |
| feat     | A new feature                                    |
| docs     | Documentation changes                            |
| test     | Adding or correcting tests                       |
| build    | Build system or dependency changes               |
| ci       | CI configuration changes                         |
| perf     | Performance improvements                         |
| refactor | Code changes that don't fix bugs or add features |
| style    | Formatting, white-space, etc.                    |
| chore    | Other changes not modifying src/test files       |

#### Commit Scope

Specify which part of the code is affected (e.g., wallet, web, api). Multiple scopes can be used if changes impact several areas.

#### Commit Message Format

* Keep under 50 characters
* Start with lowercase letter
* No ending punctuation
* Use imperative mood (e.g., "fix bug" not "fixed bug")

Examples:

* Correct ✅: "feat(wallet): add biometric authentication"
* Incorrect ❌: "feat(wallet): Added biometric authentication."

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following our code guidelines
4. Ensure tests pass: `yarn test`
5. Commit your changes using conventional commit format
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Review Process

Your PR will go through these checks:

1. Dependency installation verification
2. Code formatting check
3. TypeScript compilation
4. Linting with ESLint
5. Test execution
6. Final maintainer review

### After Submission

* **If Approved**: Your PR will be merged into the main branch
* **If Changes Requested**: Address the feedback and update your PR

### Reporting Issues

When reporting bugs, include:

* Detailed reproduction steps
* Environment information (OS, Node.js version, etc.)
* Screenshots if applicable
* Suggested fixes if possible

### Code of Conduct

We follow a Code of Conduct to ensure a welcoming community for all contributors. Please read it before contributing.

[Read the full Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

Pactus Project - [Website](https://pactus.org/) - [GitHub](https://github.com/pactus-project)
