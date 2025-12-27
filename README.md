# Node.js Learning Workspace

This project demonstrates **npm workspaces** - a feature that allows you to manage multiple packages within a single repository.

## 📁 Project Structure

```
node_learn/
├── package.json          # Root workspace configuration
├── packages/
│   ├── utils/           # Shared utility functions
│   │   ├── package.json
│   │   └── index.js
│   └── app/             # Main application
│       ├── package.json
│       └── index.js
```

## 🚀 Getting Started

### 1. Install Dependencies

First, install all dependencies across all workspace packages:

```bash
npm install
```

This will install dependencies for the root package AND all packages in the `packages/*` directory.

### 2. Run the Demo App

```bash
node packages/app/index.js
```

## 🔧 How Workspaces Work

### Root package.json
The root `package.json` defines the workspace configuration:
```json
{
  "workspaces": ["packages/*"]
}
```

This tells npm to treat all directories in `packages/` as workspace packages.

### Cross-Package Dependencies
The `@node-learn/app` package depends on `@node-learn/utils`:
```json
{
  "dependencies": {
    "@node-learn/utils": "*"
  }
}
```

npm automatically links these packages together!

## 📦 Benefits of Workspaces

1. **Shared Dependencies**: Install dependencies once at the root, use them everywhere
2. **Local Linking**: Packages can depend on each other without publishing to npm
3. **Unified Versioning**: Manage all package versions from one place
4. **Efficient**: Single `node_modules` folder, no duplication

## 🎯 Workspace Commands

```bash
# Run a script in a specific workspace
npm run test --workspace=@node-learn/utils

# Run a script in ALL workspaces
npm run test --workspaces

# Add a dependency to a specific workspace
npm install lodash --workspace=@node-learn/app

# List all workspaces
npm list --workspaces
```

## 💡 Next Steps

Try creating your own workspace packages:

1. Create a new directory in `packages/`
2. Add a `package.json` file
3. Reference it in other packages using its name
4. Run `npm install` to link everything together

Happy learning! 🎉
