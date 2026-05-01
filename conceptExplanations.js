export const conceptExplanations = {
  "Installing Python 3.x — pyenv for version management": {
    problem: "Early developers installed Python globally on their operating systems. As projects grew, Project A needed Python 2.7, while Project B needed Python 3.6. Upgrading the global Python version would break older projects, leaving developers paralyzed.",
    observations: "Developers realized that the operating system's environment and the project's environment needed to be completely decoupled. They needed a way to seamlessly switch the 'active' Python binary depending on which folder they were in.",
    reasoning: "Instead of overwriting the system Python, what if we intercepted the command `python`? By manipulating the system's PATH variable, a tool could inject a 'shim' (a lightweight interceptor) that looks at the current directory, checks a config file like `.python-version`, and transparently routes the command to the correct, isolated Python installation.",
    insight: "pyenv was created to act as a traffic director for Python binaries. It manages multiple Python versions in hidden folders and uses PATH manipulation to ensure that typing `python` always executes the exact version your specific project requires."
  },
  "Virtual environments: venv, virtualenv": {
    problem: "Even if developers used the same Python version, different projects needed different versions of third-party libraries (e.g., Django 2.0 vs Django 3.0). Installing everything globally led to dependency conflicts known as 'Dependency Hell'.",
    observations: "Python's import system looks for packages in specific directories (like `site-packages`). If we could trick Python into looking at a project-specific directory instead of the global one, we could isolate dependencies.",
    reasoning: "By creating an isolated folder containing a copy (or symlink) of the Python binary and its own `site-packages` directory, we can create a sandbox. When a developer 'activates' this sandbox, their terminal's PATH is updated to prioritize the sandboxed binary. The sandboxed Python naturally installs and imports packages from its own isolated folder.",
    insight: "Virtual environments (`venv`) are simply isolated directory trees. They provide a localized context for pip to install packages, ensuring that dependencies for one project never contaminate the system or other projects."
  },
  "Variables — naming conventions (PEP 8), snake_case": {
    problem: "In the early days of programming, variable names were often cryptic (e.g., `x`, `ptr`, `usrNm`), and every developer used different capitalization styles (camelCase, PascalCase, kebab-case). This made reading other people's code a mental burden.",
    observations: "Code is read much more frequently than it is written. The creator of Python, Guido van Rossum, observed that visual consistency across a codebase significantly reduces cognitive load and makes identifying the *type* of a symbol easier.",
    reasoning: "To solve this, the Python community needed a universal style guide. They decided that variables and functions should visually contrast with Classes. Since English reads with spaces, separating words with underscores (`snake_case`) provided the most natural readability for lowercase identifiers.",
    insight: "PEP 8 established `snake_case` for variables/functions to maximize readability and create a unified visual language for all Python developers, emphasizing that code readability is a primary feature of the language itself."
  }
};
