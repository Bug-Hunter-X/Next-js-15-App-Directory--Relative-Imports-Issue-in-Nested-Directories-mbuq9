# Next.js 15 App Directory: Relative Imports Issue in Nested Directories

This repository demonstrates an unexpected behavior encountered when using relative imports within a nested directory structure in a Next.js 15 App Router application.

## Bug Description
When importing components or modules using relative paths from a deeply nested directory, Next.js 15 might fail to resolve the imports, leading to runtime errors. This issue is particularly noticeable when the imported modules are located several levels above the current file.

## Bug Reproduction
1. Clone the repository.
2. Navigate to the `pages` directory and try to run the Next.js development server. 
3. Observe that the app will not load properly, indicating issues with resolving imports from a nested structure.

## Solution
The proposed solution utilizes the `path` module to generate the correct absolute paths to the imported modules. This method ensures that the imports resolve correctly regardless of the directory structure. This fixes the import resolution issue, allowing components located within deeply nested directories to be accessed and used within the Next.js application.
