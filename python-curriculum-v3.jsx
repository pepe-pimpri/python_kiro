import { useState, useRef, useEffect } from "react";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";

const curriculum = [
  {
    level: "FOUNDATIONS",
    color: "#4ade80",
    emoji: "🌱",
    topics: [
      {
        id: 1,
        title: "Python Setup & Environment",
        concepts: [
          "Installing Python 3.x — pyenv for version management",
          "Virtual environments: venv, virtualenv",
          "REPL (interactive shell) vs script files (.py)",
          "Running scripts: python file.py, python -m module",
          "pip — installing, upgrading, listing packages",
          "requirements.txt — pinning dependencies",
          "Understanding PYTHONPATH and sys.path",
          "VS Code / PyCharm setup with linters",
          "Shebang lines (#!/usr/bin/env python3)",
          "__pycache__ and .pyc files explained",
        ],
        assignments: [
          "Install Python via pyenv, create a venv, install requests, and freeze to requirements.txt",
          "Write a script that prints its own Python version, platform, and all installed packages",
          "Set up VS Code with pylint, black, and isort; configure settings.json for auto-format on save",
          "Create a project folder structure: src/, tests/, docs/; add a README.md and .gitignore",
          "Write a shell script (setup.sh) that creates the venv and installs all dependencies automatically",
        ],
      },
      {
        id: 2,
        title: "Variables, Types & Operators",
        concepts: [
          "Variables — naming conventions (PEP 8), snake_case",
          "int, float, complex, bool — ranges, limits, edge cases",
          "str — immutable sequences, Unicode by default",
          "None — the null object, identity check with `is`",
          "Dynamic typing vs static typing (conceptual)",
          "Type annotations (basic): x: int = 5",
          "Arithmetic: +, -, *, /, //, %, **",
          "Comparison: ==, !=, <, >, <=, >= (chaining: 1 < x < 10)",
          "Logical: and, or, not — short-circuit evaluation",
          "Bitwise: &, |, ^, ~, <<, >>",
          "Assignment operators: +=, -=, *=, //=, **=",
          "Walrus operator := (assignment expression, Python 3.8+)",
          "id(), type(), isinstance(), issubclass()",
          "Truthiness and falsy values: 0, '', [], {}, None, False",
          "int overflow doesn't exist (arbitrary precision), float precision issues",
          "sys.maxsize, math.inf, float('nan')",
        ],
        assignments: [
          "Write a program that demonstrates all arithmetic operators with edge cases (division by zero, int vs float)",
          "Show short-circuit evaluation: write functions with side effects (print) and prove and/or stops early",
          "Explore float precision: show why 0.1 + 0.2 != 0.3, then fix it using decimal module",
          "Use walrus operator := to write a while loop that reads and processes input in one line",
          "Write a program that checks truthiness of 20 different values and prints a table: value → bool(value)",
          "Build a bitwise flag system: encode/decode user permissions (READ=1, WRITE=2, EXEC=4) using bitwise ops",
          "Demonstrate operator chaining: 1 < x < 10 vs x > 1 and x < 10 — show they're equivalent",
        ],
      },
      {
        id: 3,
        title: "Strings — Deep Dive",
        concepts: [
          "String literals: single, double, triple-quoted",
          "Raw strings r'' — regex, Windows paths",
          "Byte strings b'' — encoding/decoding",
          "f-strings (Python 3.6+) — expressions, formatting specs",
          "str.format() and % formatting (legacy awareness)",
          "String methods: upper, lower, strip, lstrip, rstrip, split, join, replace, find, count, startswith, endswith",
          "String methods: center, ljust, rjust, zfill, expandtabs",
          "str.encode() / bytes.decode() — UTF-8, ASCII, Latin-1",
          "Slicing: s[start:stop:step], reversal s[::-1]",
          "Immutability — why strings can't be modified in place",
          "String interning — id() on short strings",
          "textwrap.wrap(), textwrap.dedent()",
          "string module: ascii_letters, digits, punctuation",
          "Template strings: string.Template",
          "multiline strings and indentation",
          "chr(), ord() — character ↔ integer",
        ],
        assignments: [
          "Write a Caesar cipher that shifts any string by N positions, handling wrap-around for both directions",
          "Build a string formatter: given a template with {name}, {age}, {city}, fill it from a dict",
          "Write a word counter that takes a paragraph and returns a dict of {word: count} (case-insensitive)",
          "Implement str.title() from scratch (without using .title()): capitalize first letter after spaces/punctuation",
          "Write a URL slug generator: 'Hello World! 123' → 'hello-world-123' (lowercase, replace spaces with -, strip special chars)",
          "Reverse words in a sentence: 'Hello World' → 'World Hello' (without split/join shortcut — do it manually)",
          "Build a simple string compression: 'aaabbcccc' → 'a3b2c4'; decompress back to original",
          "Write a palindrome checker that ignores spaces, punctuation, and case: 'A man a plan a canal Panama'",
          "Encode and decode a string to/from base64 using the base64 module",
          "Demonstrate string interning: use sys.intern() and show when `is` gives unexpected results",
        ],
      },
      {
        id: 4,
        title: "Control Flow",
        concepts: [
          "if / elif / else — indentation rules",
          "Ternary / conditional expression: x if condition else y",
          "match / case (Python 3.10+ structural pattern matching)",
          "for loops — iterating over any iterable",
          "range(start, stop, step) — all forms",
          "while loops — condition-based iteration",
          "break — exit loop early",
          "continue — skip to next iteration",
          "pass — placeholder (no-op)",
          "else clause on for and while — runs if no break",
          "Nested loops — O(n²) awareness",
          "enumerate() — index + value together",
          "zip() — iterate multiple iterables in parallel",
          "zip_longest() from itertools",
          "Loop unpacking: for k, v in dict.items()",
          "Comprehension as a loop alternative (preview)",
        ],
        assignments: [
          "FizzBuzz extended: also print 'Bang' for 7, 'BuzzBang' for 35, 'FizzBang' for 21, 'FizzBuzzBang' for 105",
          "Use match/case to build a simple command parser: 'quit', 'help', 'add <n>', 'remove <n>'",
          "Write a program that finds all prime numbers from 2–1000 using nested loops (Sieve of Eratosthenes)",
          "Implement binary search iteratively; then rewrite with a while loop's else clause to print 'not found'",
          "Build a number guessing game: computer picks random number 1–100, user gets 7 guesses with hot/cold hints",
          "Use zip() to merge two lists into a dict; handle unequal lengths with zip_longest and a sentinel",
          "Write a matrix transpose using nested loops (no NumPy): [[1,2],[3,4]] → [[1,3],[2,4]]",
          "Implement a loop that reads lines from input until 'quit', accumulates stats (count, sum, avg of numbers)",
          "Use enumerate to find all indices where a value appears in a list (equivalent of str.find_all for lists)",
          "Write a collatz sequence generator: given n, keep applying (n/2 if even, 3n+1 if odd) until n=1; count steps",
        ],
      },
      {
        id: 5,
        title: "Functions — Complete Guide",
        concepts: [
          "def keyword, function naming, docstrings",
          "Parameters vs arguments — positional, keyword",
          "Default parameter values — mutable default trap!",
          "*args — variable positional arguments",
          "**kwargs — variable keyword arguments",
          "Keyword-only arguments (after *)",
          "Positional-only arguments (before /, Python 3.8+)",
          "Return values — single, multiple (tuple unpacking), None",
          "Scope — LEGB: Local, Enclosing, Global, Built-in",
          "global and nonlocal keywords",
          "Closures — functions that capture enclosing scope",
          "Lambda functions — anonymous, single-expression",
          "First-class functions — pass as argument, return from function",
          "Higher-order functions: map(), filter(), sorted(key=)",
          "functools.reduce()",
          "Recursion — base case, recursive case, call stack",
          "Recursion depth: sys.setrecursionlimit()",
          "Tail recursion (Python doesn't optimize it — why)",
          "Memoization with @functools.lru_cache",
          "functools.partial() — partial application",
          "Introspection: __name__, __doc__, __annotations__",
        ],
        assignments: [
          "Demonstrate the mutable default trap: def f(lst=[]): lst.append(1); show the bug, then fix it with None sentinel",
          "Write a function that accepts any mix of positional and keyword args and prints a receipt-style summary",
          "Implement your own map(), filter(), reduce() from scratch using loops",
          "Write a closure-based counter: make_counter() returns increment(), decrement(), reset(), get_value()",
          "Use functools.partial to create pre-configured functions: celsius_to = partial(convert_temp, from='C')",
          "Write recursive functions for: factorial, fibonacci, power(base, exp), binary search, flatten nested list",
          "Implement memoize() decorator from scratch (before using lru_cache); then benchmark vs plain recursion for fib(35)",
          "Build a function pipeline: pipe(f, g, h)(x) applies f→g→h in sequence",
          "Write a function that accepts keyword-only arguments for config and positional-only for data",
          "Use sorted() with a key function to sort a list of dicts by multiple fields: first by age, then by name",
          "Build a simple event dispatcher: register(event, handler), dispatch(event, *args) calls all handlers",
          "Write a recursive tree printer: given nested dicts, print them indented like a file tree",
        ],
      },
    ],
  },
  {
    level: "DATA STRUCTURES",
    color: "#38bdf8",
    emoji: "🗂️",
    topics: [
      {
        id: 6,
        title: "Lists & Tuples",
        concepts: [
          "List creation: literal, list(), list comprehension",
          "Indexing (positive, negative) and slicing",
          "Mutability — modifying in place",
          "Methods: append, extend, insert, remove, pop, clear, index, count, sort, reverse, copy",
          "sort() vs sorted() — in-place vs new list",
          "sort(key=, reverse=) — custom sorting",
          "List multiplication: [0] * 10 — shallow copy trap",
          "Nested lists (2D arrays) — list of lists",
          "List comprehensions — with condition, nested",
          "Unpacking: a, b, *rest = [1, 2, 3, 4, 5]",
          "zip(), enumerate(), reversed(), map() with lists",
          "Tuples — immutable, hashable, usable as dict keys",
          "Named tuples: collections.namedtuple",
          "Tuple packing and unpacking",
          "When to use tuple vs list (convention and semantics)",
          "bisect module — binary search on sorted lists",
          "array module — typed arrays for memory efficiency",
          "Performance: list.append() O(1) amortized, insert O(n)",
        ],
        assignments: [
          "Implement a stack (LIFO) using a list: push, pop, peek, is_empty, size — with custom EmptyStackError",
          "Implement a queue (FIFO) using collections.deque; show why list.pop(0) is O(n) and deque.popleft() is O(1)",
          "Write a flatten function that works on arbitrarily nested lists without recursion (use a stack)",
          "Sort a list of employee dicts by department first, then by salary descending, then by name",
          "Use list comprehension to build: multiplication table (10x10), prime sieve, all Pythagorean triples under 100",
          "Implement a circular buffer (ring buffer) using a list with fixed size",
          "Write a function that rotates a list by k positions: [1,2,3,4,5] rotated by 2 → [3,4,5,1,2]",
          "Use bisect.insort to maintain a sorted list as you insert elements one by one",
          "Replace a 2D list (matrix) with namedtuple for rows — show improved readability",
          "Write a 'sliding window maximum' function: given list and window size k, return max of each window",
          "Implement merge sort and quick sort on a list; benchmark both against list.sort() for 10k elements",
          "Write a function to find duplicates in a list using only list operations (no set); then optimize with set",
        ],
      },
      {
        id: 7,
        title: "Dictionaries & Sets",
        concepts: [
          "Dict creation: literal, dict(), dict comprehension, fromkeys()",
          "CRUD: access, get(), setdefault(), update(), pop(), popitem(), del",
          "Iterating: keys(), values(), items()",
          "Dict ordering (insertion order guaranteed Python 3.7+)",
          "Dict merging: {**a, **b} (Python 3.5+), a | b (Python 3.9+)",
          "collections.defaultdict — automatic default values",
          "collections.OrderedDict — explicit ordering methods",
          "collections.Counter — frequency counting",
          "Counter arithmetic: +, -, &, |",
          "collections.ChainMap — layered dicts",
          "Dict comprehensions with conditions and transformations",
          "Hashing — what makes a key valid (hashable)",
          "Sets: add, remove, discard, pop, clear",
          "Set operations: union |, intersection &, difference -, symmetric_difference ^",
          "Set comprehensions",
          "frozenset — immutable, hashable sets",
          "Performance: dict/set lookup O(1) average",
          "Hash collisions — conceptual awareness",
        ],
        assignments: [
          "Build a word frequency counter using Counter; find top-10 words in a long text, excluding stopwords",
          "Write a function group_by(lst, key_fn) that groups list items by a key function into a defaultdict",
          "Implement a simple in-memory cache using a dict: get(key), set(key, val, ttl), expire old entries",
          "Find all anagrams in a list of words: group words that are anagrams of each other using sorted tuple as key",
          "Use ChainMap to implement layered config: defaults → environment → user overrides",
          "Build a bidirectional dict (bidict): lookup by key OR by value",
          "Write a function to invert a dict: {a:b} → {b:a}; handle non-unique values by grouping into lists",
          "Use set operations to find: common friends between users, friends-of-friends, mutual connections",
          "Implement a 'diff' function: given two dicts, return added, removed, and changed keys",
          "Build a dependency resolver using dicts: given {task: [deps]}, return a valid execution order (topological sort)",
          "Write a function that deep-merges two nested dicts (not shallow merge)",
          "Use frozenset as a dict key to implement a memoized combination checker",
        ],
      },
      {
        id: 8,
        title: "Comprehensions & Functional Tools",
        concepts: [
          "List comprehensions — [expr for x in iter if cond]",
          "Nested list comprehensions — flattening, matrix ops",
          "Dict comprehensions",
          "Set comprehensions",
          "Generator expressions (lazy evaluation)",
          "Comprehension vs loop — when each is appropriate",
          "map() — apply function to iterable",
          "filter() — select elements by predicate",
          "functools.reduce() — fold left",
          "zip() and zip_longest()",
          "enumerate(start=N)",
          "sorted(), min(), max() with key= and default=",
          "any(), all() — short-circuit evaluation",
          "sum(), abs(), round(), divmod(), pow()",
          "itertools: chain, islice, product, permutations, combinations, cycle, repeat, groupby, takewhile, dropwhile",
          "functools: partial, lru_cache, cache, reduce, wraps",
          "operator module: itemgetter, attrgetter, methodcaller",
        ],
        assignments: [
          "Rewrite these using comprehensions: nested for loops building a dict, filter+map chain, list of conditionals",
          "Use itertools.product to generate all possible combinations of card suits and values (standard deck)",
          "Implement a pipeline using functools.reduce: [double, add_one, square] applied to a list",
          "Use itertools.groupby to group a sorted list of log lines by log level (INFO, WARNING, ERROR)",
          "Generate all permutations of a string using itertools.permutations; then write it manually with recursion",
          "Use any()/all() with generator expressions to validate a list of dicts (e.g., all have required keys)",
          "Build a lazy infinite sequence using generator expressions and islice",
          "Use operator.itemgetter to sort a list of tuples by 2nd then 3rd element without lambda",
          "Find the Cartesian product of 3 lists, filter only tuples where sum > 10, collect to dict keyed by sum",
          "Use itertools.chain to merge multiple CSV file readers without loading all into memory",
        ],
      },
      {
        id: 9,
        title: "Regular Expressions",
        concepts: [
          "re module: search, match, fullmatch, findall, finditer, sub, split",
          "Raw strings for patterns: r'\\d+'",
          "Character classes: \\d, \\w, \\s, \\D, \\W, \\S, [abc], [^abc], [a-z]",
          "Anchors: ^, $, \\b, \\B",
          "Quantifiers: *, +, ?, {n}, {n,m} — greedy vs lazy (.*?)",
          "Groups: (), named groups (?P<name>), non-capturing (?:)",
          "Lookahead (?=) and lookbehind (?<=)",
          "Alternation: |",
          "Flags: re.IGNORECASE, re.MULTILINE, re.DOTALL, re.VERBOSE",
          "Compiled patterns: re.compile() for reuse",
          "re.sub() with backreferences and callable replacement",
          "re.split() — split on pattern",
          "Match object: .group(), .groups(), .groupdict(), .span()",
          "Catastrophic backtracking — awareness",
        ],
        assignments: [
          "Write a regex to validate: email addresses, phone numbers (multiple formats), IP addresses, URLs",
          "Extract all dates from text in formats: MM/DD/YYYY, DD-MM-YYYY, Month DD YYYY — normalize to ISO 8601",
          "Write a log parser using regex: extract timestamp, level, and message from Apache-style log lines",
          "Build a markdown-to-plain-text stripper: remove **bold**, _italic_, `code`, [links](url)",
          "Use re.sub() with a function to replace all numbers in a string with their word equivalents (1 → 'one')",
          "Write a regex tokenizer for a simple expression language: numbers, operators, parentheses, identifiers",
          "Find all duplicate words in a text using regex: 'the the quick brown fox fox' → ['the', 'fox']",
          "Build a simple template engine using re.sub: replace {{variable}} with values from a dict",
          "Write a regex to parse CSV lines correctly handling quoted fields with commas inside",
          "Validate a Python identifier: follows naming rules, not a reserved keyword",
        ],
      },
    ],
  },
  {
    level: "OOP & DESIGN",
    color: "#f87171",
    emoji: "🏗️",
    topics: [
      {
        id: 10,
        title: "Object-Oriented Programming",
        concepts: [
          "Classes — blueprint vs instance",
          "__init__ — constructor, self parameter",
          "Instance attributes vs class attributes",
          "Instance methods, class methods (@classmethod, cls), static methods (@staticmethod)",
          "Encapsulation: _protected, __private (name mangling)",
          "Properties: @property, @setter, @deleter",
          "Inheritance — single, multi-level",
          "super() — calling parent methods",
          "Method Resolution Order (MRO): C3 linearization",
          "Multiple inheritance — diamond problem",
          "Mixins — composition via multiple inheritance",
          "Dunder methods: __str__, __repr__, __len__, __getitem__, __setitem__, __delitem__",
          "__eq__, __lt__, __le__, __gt__, __ge__, __hash__",
          "__add__, __radd__, __iadd__, __mul__, __rmul__",
          "__call__ — callable objects",
          "__contains__ — in operator",
          "__iter__, __next__ — iterator protocol on class",
          "__enter__, __exit__ — context manager protocol",
          "__getattr__, __setattr__, __delattr__, __getattribute__",
          "vars(), dir(), hasattr(), getattr(), setattr(), delattr()",
          "isinstance() vs type() — why isinstance is preferred",
          "__class__, __dict__, __mro__, __bases__",
        ],
        assignments: [
          "Build a BankAccount class: deposit, withdraw, transfer, get_balance; prevent overdrafts with custom exception",
          "Create a Vector2D class with: +, -, *, dot product, magnitude, normalize, __repr__, __eq__",
          "Build a Matrix class supporting: +, *, transpose, __getitem__[row][col], __str__ as grid",
          "Design a Shape hierarchy: Shape → Circle, Rectangle, Triangle, with area(), perimeter(), __repr__",
          "Implement a linked list class: Node + LinkedList with append, prepend, delete, __iter__, __len__, __contains__",
          "Build a Stack and Queue using __len__, __iter__, __repr__, proper dunder methods throughout",
          "Write a TemperatureUnit class: supports Celsius, Fahrenheit, Kelvin with conversion using @property",
          "Create a mixin architecture: JSONMixin (to_json, from_json), ValidateMixin (validate), LogMixin (log_action)",
          "Write a Descriptor class for type-validated attributes: age must be int, name must be str, etc.",
          "Implement a simple ORM-like row mapper: define a Model class where field definitions auto-generate __init__",
          "Use __call__ to build a class-based function decorator that counts calls and logs args",
          "Build a Range-like class implementing full sequence protocol: indexing, slicing, len, contains, iter, reversed",
        ],
      },
      {
        id: 11,
        title: "Advanced OOP & Patterns",
        concepts: [
          "Abstract Base Classes: abc.ABC, @abstractmethod, @abstractproperty",
          "abc.ABCMeta — registering virtual subclasses",
          "Dataclasses: @dataclass, field(), post_init, frozen=True",
          "dataclasses: __eq__, __hash__, __order__ auto-generation",
          "dataclasses.asdict(), dataclasses.astuple()",
          "__slots__ — memory optimization, disabling __dict__",
          "Composition over inheritance — design principle",
          "Protocol (typing.Protocol) — structural subtyping, duck typing formal",
          "Metaclasses — __new__, __init__, __call__ on type",
          "Custom metaclass: auto-registering, singleton, attribute validation",
          "Class decorators vs metaclasses — when to use which",
          "__init_subclass__ — hook for subclass creation",
          "Enum — IntEnum, StrEnum, Flag, auto()",
          "NamedTuple (typing.NamedTuple) — typed named tuples",
          "Pydantic models (preview — covered in detail in FastAPI section)",
        ],
        assignments: [
          "Define an abstract Animal class with abstract methods: speak(), move(); implement Dog, Cat, Bird, Fish",
          "Build a plugin system using ABCMeta.register(): plugins register themselves, a loader discovers all",
          "Refactor a flat class into @dataclass with proper field() defaults and post-init validation",
          "Create a frozen @dataclass for an immutable config object; show that modification raises FrozenInstanceError",
          "Use __slots__ on a class with 1M instances; benchmark memory usage against regular class with __dict__",
          "Implement a Protocol for Serializable: must have to_dict() and from_dict(); use it in type hints",
          "Write a metaclass that validates all method names are lowercase_with_underscores at class creation time",
          "Build a Registry metaclass: all subclasses auto-register in a global dict by their name",
          "Implement an Enum for HTTP status codes with a method get_message() returning the human description",
          "Refactor an inheritance chain into composition: instead of Animal → Dog → GuideDog, use capabilities as components",
          "Write a __init_subclass__ hook that enforces all subclasses define a VERSION attribute",
          "Build a typed NamedTuple for a database row and show how it differs from a regular tuple and dict",
        ],
      },
      {
        id: 12,
        title: "Decorators",
        concepts: [
          "Functions as first-class objects — review",
          "Closures — the foundation of decorators",
          "Simple decorator pattern — wrapper function",
          "@functools.wraps — preserving __name__, __doc__",
          "Decorator with arguments — factory pattern",
          "Class-based decorators — __init__ receives fn, __call__ wraps",
          "Stacking decorators — order of application (bottom-up, top-down execution)",
          "@property, @staticmethod, @classmethod — built-in decorators",
          "Decorating classes — modifying class behavior",
          "@dataclass as class decorator example",
          "Decorator use cases: timing, logging, retry, rate limiting, caching, auth, validation",
          "functools.lru_cache, functools.cache (3.9+), functools.cached_property",
          "Decorator pitfalls: mutable default in wrapper, exception swallowing",
          "contextlib.contextmanager — decorator for context managers",
        ],
        assignments: [
          "Write @timer decorator that prints function name and elapsed time in milliseconds",
          "Write @log_calls decorator that logs function name, args, kwargs, return value, and any exception",
          "Build @retry(max_attempts=3, delay=1.0, exceptions=(Exception,)) decorator with exponential backoff",
          "Implement @rate_limit(calls_per_second=10) decorator that throttles a function",
          "Write @validate_types decorator that checks argument types match annotations at runtime",
          "Create @require_auth decorator for a mock web framework: checks a global current_user is set",
          "Stack @timer + @log_calls + @retry and show the execution order with a flaky network function",
          "Build a class-based @memoize decorator that stores results in a dict and supports cache_clear()",
          "Write @deprecated(message) decorator that prints a DeprecationWarning when the function is called",
          "Implement @singleton using a decorator (not metaclass)",
          "Write a @trace decorator that prints the call tree with indentation for nested calls",
          "Build @once: a decorator that ensures a function only runs once; subsequent calls return the first result",
        ],
      },
    ],
  },
  {
    level: "ADVANCED PYTHON",
    color: "#fbbf24",
    emoji: "⚡",
    topics: [
      {
        id: 13,
        title: "Iterators & Generators",
        concepts: [
          "Iterable vs Iterator — the distinction",
          "__iter__() and __next__() protocol",
          "StopIteration exception",
          "iter() and next() built-ins, next(iter, default)",
          "Generator functions — yield keyword",
          "Generator state: paused, resumed, closed",
          "yield from — delegating to sub-generator",
          "Generator expressions — lazy list comprehensions",
          "send() — sending values into a generator (coroutine-style)",
          "throw() — injecting exceptions into a generator",
          "close() — GeneratorExit exception",
          "Chaining generators for memory-efficient pipelines",
          "itertools — chain, islice, groupby, tee, cycle, repeat, count, accumulate, starmap, pairwise (3.10+)",
          "Infinite generators — memory implications",
          "When generators beat list comprehensions (large/infinite data)",
        ],
        assignments: [
          "Implement a custom range class from scratch using __iter__ and __next__ with start, stop, step",
          "Write a generator that yields lines from a large file one at a time (lazy file reader)",
          "Build an infinite Fibonacci generator; use islice to take first N values",
          "Implement a lazy Sieve of Eratosthenes as a generator pipeline",
          "Use yield from to flatten a nested structure without recursion limit issues",
          "Build a generator-based pipeline: read_csv → parse_row → filter_valid → enrich → write_output (all lazy)",
          "Use itertools.tee to fan out a single generator into multiple independent consumers",
          "Write a coroutine (using send()) that accumulates values and yields a running average",
          "Implement itertools.groupby from scratch using generators",
          "Build a 'windowed' generator: given [1,2,3,4,5] and n=3, yield (1,2,3),(2,3,4),(3,4,5)",
          "Write a generator that reads log lines and yields parsed dicts only for ERROR entries",
          "Use itertools.accumulate to compute running totals, running max, and running product of a list",
        ],
      },
      {
        id: 14,
        title: "Context Managers",
        concepts: [
          "__enter__() and __exit__(exc_type, exc_val, exc_tb) protocol",
          "Return value of __enter__ — the 'as' target",
          "Suppressing exceptions in __exit__: return True",
          "@contextlib.contextmanager — generator-based context managers",
          "contextlib.suppress() — suppress specific exceptions",
          "contextlib.redirect_stdout / redirect_stderr",
          "contextlib.nullcontext — no-op context manager",
          "contextlib.ExitStack — dynamic number of context managers",
          "Nested context managers and multiple with targets",
          "Async context managers: __aenter__, __aexit__",
          "@contextlib.asynccontextmanager",
          "Real use cases: DB transactions, file locking, temp directories, mock patching",
        ],
        assignments: [
          "Write a context manager class that times a code block and prints duration on exit",
          "Build a TempDirectory context manager: creates a temp dir on enter, deletes it on exit (even on exception)",
          "Implement a DatabaseTransaction context manager: commit on success, rollback on exception",
          "Write a @contextmanager that temporarily changes the working directory",
          "Build a SuppressAndLog context manager: suppress specified exceptions but log them to a file",
          "Use contextlib.ExitStack to open a variable number of files simultaneously",
          "Implement a Mutex context manager using threading.Lock: acquire on enter, release on exit",
          "Write an async context manager for an HTTP session (using aiohttp) that closes properly",
          "Build a context manager that patches environment variables temporarily (like unittest.mock.patch.dict)",
          "Chain multiple context managers to build a 'test harness': captures stdout, mocks time, patches config",
        ],
      },
      {
        id: 15,
        title: "Concurrency & Parallelism",
        concepts: [
          "The GIL — what it is, what it prevents, misconceptions",
          "CPU-bound vs I/O-bound workloads — which to use",
          "threading.Thread — start(), join(), daemon threads",
          "threading.Lock, RLock, Semaphore, Event, Condition",
          "threading.local() — thread-local storage",
          "thread safety — race conditions, deadlocks",
          "multiprocessing.Process — true parallelism",
          "multiprocessing.Pool — map, starmap, apply_async",
          "multiprocessing.Queue, Pipe — inter-process communication",
          "multiprocessing.Manager — shared state",
          "multiprocessing.Value, Array — shared memory",
          "concurrent.futures.ThreadPoolExecutor",
          "concurrent.futures.ProcessPoolExecutor",
          "Future objects — result(), exception(), cancel()",
          "asyncio event loop — single-threaded concurrency",
          "async def, await — coroutines",
          "asyncio.create_task(), asyncio.gather(), asyncio.wait()",
          "asyncio.Queue — producer-consumer pattern",
          "asyncio.Semaphore, asyncio.Lock",
          "asyncio.timeout (3.11+) / asyncio.wait_for()",
          "aiofiles — async file I/O",
          "aiohttp — async HTTP client/server",
          "asyncio.run(), asyncio.get_event_loop()",
          "Mixing sync and async: asyncio.to_thread(), loop.run_in_executor()",
        ],
        assignments: [
          "Download 20 URLs: compare sequential vs ThreadPoolExecutor vs asyncio+aiohttp; time all three",
          "Find a race condition by writing a counter incremented by 100 threads; fix it with a Lock",
          "Implement producer-consumer with threading.Queue: producers add tasks, consumers process them",
          "Use multiprocessing.Pool.map() to apply a CPU-heavy function (prime factorization) to 10k numbers",
          "Write an async web scraper using aiohttp that fetches pages concurrently with a Semaphore limit of 5",
          "Build an async task queue with retry logic using asyncio.Queue",
          "Use concurrent.futures to parallelize image resizing across all CPU cores",
          "Implement a thread-safe LRU cache using threading.Lock and collections.OrderedDict",
          "Write an asyncio-based chat server (multi-client echo) using asyncio.start_server",
          "Demonstrate deadlock with two threads and two locks; then fix it using lock ordering or RLock",
          "Use asyncio.gather with return_exceptions=True to handle partial failures in concurrent tasks",
          "Build a rate-limited async API client: max 10 requests/second using asyncio.Semaphore + asyncio.sleep",
        ],
      },
      {
        id: 16,
        title: "Type Hints & Static Analysis",
        concepts: [
          "PEP 484 — type hints history and purpose",
          "Basic annotations: int, str, float, bool, None",
          "Optional[X] == X | None (Python 3.10+ union syntax)",
          "Union[X, Y] — multiple possible types",
          "Any — opt-out of type checking",
          "List[T], Dict[K,V], Tuple[T,...], Set[T] (old style)",
          "list[T], dict[K,V], tuple[T,...], set[T] (Python 3.9+)",
          "TypeVar — generic type variables",
          "Generic classes: class Stack(Generic[T])",
          "TypedDict — dict with typed keys",
          "Literal['a', 'b'] — specific value types",
          "Final — constants that can't be reassigned",
          "ClassVar — class-level attributes",
          "Protocol — structural subtyping",
          "Callable[[arg_types], return_type]",
          "Type aliases: Vector = list[float]",
          "NewType — nominal aliases (UserId = NewType('UserId', int))",
          "Overload — multiple function signatures",
          "cast() — tell mypy to trust you",
          "TYPE_CHECKING guard — avoid circular imports",
          "mypy configuration: mypy.ini / pyproject.toml",
          "mypy flags: --strict, --ignore-missing-imports",
          "pyright, pylance — alternative type checkers",
          "reveal_type() — debugging types with mypy",
        ],
        assignments: [
          "Take a 150-line untyped utility module; add full annotations; run mypy --strict and fix all errors",
          "Write a generic Stack[T] class with push, pop, peek, is_empty — all correctly typed",
          "Define TypedDicts for a User, Post, Comment API response; use them in a parse_response function",
          "Use Literal to type a function accepting only 'asc' | 'desc' | 'random' as a sort_order parameter",
          "Create a Protocol for Comparable and Printable; write a function that accepts any Protocol-conforming type",
          "Use @overload to define a function that returns int when given int, str when given str",
          "Write a typed decorator factory @retry(n: int) -> Callable[[F], F] using TypeVar and Callable",
          "Set up mypy in a CI workflow: fail the build if any type errors exist",
          "Use NewType to distinguish UserId from plain int; show how it prevents passing wrong type",
          "Build a fully typed mini-ORM: Model, Field, QuerySet — all with correct generics",
        ],
      },
      {
        id: 17,
        title: "Error Handling & Logging",
        concepts: [
          "Exception hierarchy: BaseException → Exception → ...",
          "Common exceptions: ValueError, TypeError, KeyError, IndexError, AttributeError, RuntimeError, OSError",
          "try / except / else / finally — all four clauses",
          "Catching multiple exceptions: except (TypeError, ValueError)",
          "Catching all exceptions: except Exception as e (not bare except)",
          "Re-raising: raise (no args) inside except block",
          "Exception chaining: raise NewError() from original_error",
          "Suppressing context: raise NewError() from None",
          "Custom exception classes — single, hierarchy",
          "Exception attributes: message, code, context, __cause__, __traceback__",
          "traceback module — formatting and inspecting tracebacks",
          "warnings module — DeprecationWarning, UserWarning, warnings.warn()",
          "logging module — the full story",
          "Log levels: DEBUG, INFO, WARNING, ERROR, CRITICAL",
          "Logger hierarchy: root logger, named loggers, propagation",
          "Handlers: StreamHandler, FileHandler, RotatingFileHandler, TimedRotatingFileHandler",
          "Formatters — custom log format strings",
          "Filters — per-handler and per-logger filtering",
          "logging.config.dictConfig() — configure from dict/YAML",
          "Structured logging: JSON logs using python-json-logger",
          "loguru — modern logging library",
          "contextvar-based request ID injection",
          "Sentry / error tracking integration (conceptual)",
        ],
        assignments: [
          "Build a custom exception hierarchy for an e-commerce app: AppError → PaymentError, InventoryError, AuthError, each with code and user_message",
          "Write try/except/else/finally blocks and demonstrate that else runs only on success, finally always runs",
          "Show exception chaining: low-level DB error → application-level DataFetchError using raise from",
          "Configure logging with: DEBUG to rotating file, WARNING+ to console with color, JSON format for production",
          "Add request_id to every log line using logging.Filter and threading.local",
          "Write a function that wraps any exception and adds context (function name, args) using traceback module",
          "Set up python-json-logger and produce structured JSON logs that a log aggregator (ELK) can parse",
          "Build an 'error budget' tracker: count ERROR logs per minute, alert when threshold exceeded",
          "Implement a context manager that catches all exceptions, logs them with full traceback, and re-raises",
          "Convert a codebase using print() for errors to use proper logging with appropriate levels",
          "Write a global exception hook (sys.excepthook) that logs unhandled exceptions to a file",
          "Set up loguru with rotation, retention, compression, and custom format; compare to standard logging",
        ],
      },
    ],
  },
  {
    level: "FILE I/O & SERIALIZATION",
    color: "#a78bfa",
    emoji: "💾",
    topics: [
      {
        id: 18,
        title: "File I/O & Pathlib",
        concepts: [
          "open() — modes: r, w, a, rb, wb, r+, x",
          "File methods: read(), readline(), readlines(), write(), writelines(), seek(), tell()",
          "Context manager with — always use it",
          "Encoding: utf-8, ascii, latin-1, errors='ignore'/'replace'",
          "pathlib.Path — the modern way",
          "Path methods: exists(), is_file(), is_dir(), stat(), open()",
          "Path operations: / operator, parent, name, stem, suffix, parts",
          "Path glob: glob(), rglob()",
          "Path manipulation: rename(), unlink(), mkdir(), rmdir(), touch()",
          "shutil: copy, copy2, copytree, rmtree, move, disk_usage",
          "os.path (legacy) — abspath, join, dirname, basename, splitext",
          "os: listdir, makedirs, getcwd, chdir, environ, getenv",
          "tempfile: NamedTemporaryFile, TemporaryDirectory, mkstemp",
          "fileinput — process multiple files as one stream",
          "mmap — memory-mapped files for large files",
          "watchdog — watching filesystem events",
        ],
        assignments: [
          "Write a recursive directory tree printer using pathlib (like the Unix `tree` command)",
          "Build a log parser: read a large log file line-by-line, extract ERROR lines, write to errors.log",
          "Write a file organizer: scan a folder, move files to subfolders by extension (jpg→images/, pdf→docs/)",
          "Implement a backup utility: copy a folder, preserving timestamps, skip already-backed-up files",
          "Write a script to find all duplicate files in a directory (by content hash, not name)",
          "Build a file watcher using watchdog: print which files were created, modified, deleted in real time",
          "Use mmap to search for a pattern in a 1GB file without loading it into memory",
          "Write a safe file writer: write to a temp file, then atomically rename to target (prevents partial writes)",
          "Build a recursive search (like grep): find all files containing a regex pattern, print file+line number",
          "Implement a CSV to JSON converter that handles large files without loading all rows into memory",
        ],
      },
      {
        id: 19,
        title: "Data Serialization",
        concepts: [
          "json module: dumps, loads, dump, load, indent, sort_keys, ensure_ascii",
          "Custom JSON encoder/decoder: JSONEncoder, object_hook",
          "datetime serialization in JSON (common pain point)",
          "csv module: reader, writer, DictReader, DictWriter, dialect, quoting",
          "CSV edge cases: quoting, escaping, BOM, encoding",
          "pickle module: dumps, loads — serializing Python objects",
          "pickle security warning — never unpickle untrusted data",
          "shelve module — persistent dict using pickle",
          "configparser — .ini/.cfg files",
          "tomllib (3.11+) / tomli — TOML parsing",
          "PyYAML — YAML parsing and dumping",
          "YAML security: yaml.safe_load() vs yaml.load()",
          "struct module — binary packing/unpacking",
          "Protocol Buffers / MessagePack (conceptual awareness)",
          "dataclasses.asdict() for serialization",
          "pydantic for validation + serialization (preview)",
        ],
        assignments: [
          "Write a custom JSONEncoder that handles: datetime, Decimal, UUID, set, Enum — and a matching decoder",
          "Parse a CSV with missing values and inconsistent quoting; normalize and write clean output",
          "Build a simple DB using shelve: CRUD operations for a contacts app, persisted to disk",
          "Write a config loader that reads from: defaults.toml → config.yaml → env vars (later overrides earlier)",
          "Serialize and deserialize a complex Python object graph using pickle; add versioning for forward compatibility",
          "Convert between JSON, YAML, TOML, CSV for the same dataset — write a format-converter CLI tool",
          "Use struct to parse a binary file format (e.g. BMP header, PNG signature, WAV header)",
          "Write a safe YAML loader that validates the schema after loading (no arbitrary Python object creation)",
          "Build a configuration management system: typed config using dataclasses + TOML backend",
          "Implement a simple message queue persistence layer using JSON newline-delimited files",
        ],
      },
    ],
  },
  {
    level: "TESTING & QUALITY",
    color: "#34d399",
    emoji: "🧪",
    topics: [
      {
        id: 20,
        title: "Testing with pytest",
        concepts: [
          "pytest basics: test discovery, naming conventions",
          "assert statement — pytest rewrites for better messages",
          "pytest.raises() — testing exceptions",
          "pytest.warns() — testing warnings",
          "pytest.approx() — floating point comparison",
          "Fixtures: @pytest.fixture, scope (function/class/module/session)",
          "conftest.py — shared fixtures",
          "yield fixtures — setup and teardown",
          "@pytest.mark.parametrize — data-driven tests",
          "@pytest.mark.skip, skipif — conditional skipping",
          "@pytest.mark.xfail — expected failures",
          "Custom markers — @pytest.mark.slow",
          "unittest.mock.Mock, MagicMock, patch, patch.object",
          "patch as decorator vs context manager",
          "side_effect — raising exceptions or returning multiple values",
          "assert_called_with, call_count, call_args_list",
          "pytest-mock — mocker fixture",
          "pytest-cov — coverage reports (line, branch)",
          "pytest-xdist — parallel test execution",
          "pytest.ini / pyproject.toml configuration",
          "Test doubles: mock, stub, spy, fake, dummy — definitions",
          "TDD cycle: Red → Green → Refactor",
          "Testing principles: AAA (Arrange, Act, Assert), single assertion per test",
          "Property-based testing with Hypothesis",
        ],
        assignments: [
          "Write a full test suite for a BankAccount class: 15+ tests covering all methods, edge cases, and exceptions",
          "Use @pytest.mark.parametrize to test a validate_email() function with 25 valid and invalid inputs",
          "Write fixtures for a test database: session-scoped setup, function-scoped cleanup",
          "Mock an external API: test a function that calls requests.get() — test success, 404, timeout, network error",
          "Use pytest-cov to get 100% line coverage on a module; then enable branch coverage and fix gaps",
          "Write property-based tests using Hypothesis for a sorting function — prove it handles any list",
          "Build a conftest.py with: DB fixture, API client fixture, temp directory fixture, mock time fixture",
          "Test a CLI tool using subprocess or click.testing.CliRunner",
          "Write a spy fixture that tracks calls to a real function without mocking it (using wraps=)",
          "Set up parallel test execution with pytest-xdist and verify tests don't share state",
          "Test an async function (asyncio) using pytest-asyncio",
          "Write a full test suite using TDD for a roman numeral converter — write tests first, then implement",
        ],
      },
      {
        id: 21,
        title: "Code Quality & Tooling",
        concepts: [
          "PEP 8 — Python style guide: naming, spacing, line length",
          "PEP 20 — The Zen of Python",
          "PEP 257 — Docstring conventions",
          "black — opinionated code formatter",
          "isort — import sorting",
          "ruff — fast linter replacing flake8 + isort + more",
          "flake8 — style and error checking",
          "pylint — deeper static analysis",
          "mypy — type checking (covered in type hints section)",
          "bandit — security linter",
          "pre-commit — git hook framework",
          ".pre-commit-config.yaml — configuring hooks",
          "Makefile — common development commands",
          "editorconfig — cross-editor style config",
          "Code smell identification: long functions, deep nesting, magic numbers, duplicated code",
          "Refactoring techniques: extract function, extract variable, rename, invert condition",
          "Cyclomatic complexity — radon tool",
          "Dead code detection — vulture",
        ],
        assignments: [
          "Set up a complete quality pipeline: black + isort + ruff + mypy + bandit as pre-commit hooks",
          "Take a messy 200-line script and refactor it: PEP 8, meaningful names, extract functions, no magic numbers",
          "Configure ruff with 20+ rules in pyproject.toml; explain why each rule matters",
          "Use radon to measure cyclomatic complexity; refactor any function with complexity > 10",
          "Write comprehensive docstrings (Google style) for a module: module, class, and all public methods",
          "Run bandit on a codebase and fix all medium/high severity security issues it finds",
          "Set up a Makefile with targets: install, dev, test, lint, type-check, clean, build",
          "Use vulture to find dead code in a project; remove or annotate false positives",
          "Write a .editorconfig that enforces: 4-space indent, UTF-8, trailing newline, 88 char line limit",
          "Perform a full code review on a provided 'bad' module: write comments, then refactor",
        ],
      },
    ],
  },
  {
    level: "MODULES & PACKAGING",
    color: "#fb923c",
    emoji: "📦",
    topics: [
      {
        id: 22,
        title: "Modules, Packages & Import System",
        concepts: [
          "__name__ == '__main__' guard",
          "import, from import, as aliases",
          "Relative imports: from . import, from .. import",
          "Absolute vs relative imports — PEP 328",
          "__init__.py — making a directory a package",
          "__all__ — controlling what 'from module import *' exports",
          "sys.path — how Python finds modules",
          "PYTHONPATH environment variable",
          "Import hooks — sys.meta_path, importlib",
          "importlib.import_module() — dynamic imports",
          "Lazy imports — deferred loading for performance",
          "Circular imports — detecting and avoiding",
          "Namespace packages (PEP 420) — no __init__.py needed",
          "pkg_resources vs importlib.resources — accessing package data",
          "__file__, __package__, __spec__",
        ],
        assignments: [
          "Structure a utility library into a proper package: utils/string_utils.py, utils/math_utils.py, utils/__init__.py",
          "Demonstrate a circular import, diagnose it, and fix it using three different approaches",
          "Write a plugin loader using importlib.import_module() — scan a directory and load all plugin_*.py files",
          "Use __all__ to define a clean public API for a module; verify that import * only exports defined names",
          "Add importlib.resources to load a data file (JSON/CSV) bundled inside a package",
          "Write a lazy import wrapper for heavy dependencies (numpy, pandas) — only import when first used",
          "Demonstrate sys.path manipulation to import a module from a non-standard location",
          "Build a namespace package spanning two directories without __init__.py",
        ],
      },
      {
        id: 23,
        title: "Packaging & Distribution",
        concepts: [
          "pyproject.toml — the modern standard (PEP 517, 518, 621)",
          "build backends: setuptools, flit, hatch, poetry",
          "package metadata: name, version, description, authors, classifiers",
          "dependencies vs optional-dependencies vs dev dependencies",
          "[project.scripts] — CLI entry points",
          "pip install -e . — editable installs for development",
          "Building distributions: python -m build → .whl and .tar.gz",
          "Uploading to PyPI: twine upload, TestPyPI first",
          "Semantic versioning: MAJOR.MINOR.PATCH",
          "Version management: bumpversion, bump2version, hatch version",
          "Poetry — dependency management and packaging",
          "poetry.lock — deterministic installs",
          "pip-tools — pip-compile for lock files",
          "Trusted publishing to PyPI (GitHub Actions OIDC)",
          "Private package indexes: devpi, Artifactory, AWS CodeArtifact",
        ],
        assignments: [
          "Write a pyproject.toml for a utility library; install it with pip install -e . and use it in another project",
          "Add a CLI entry point [project.scripts]; build the package with python -m build and install the wheel",
          "Set up Poetry for a project: add deps, dev-deps, create a lock file, run tests in the venv",
          "Publish a small package to TestPyPI using twine; install it from TestPyPI to verify",
          "Set up automatic version bumping and PyPI publishing on git tag using GitHub Actions",
          "Create an optional-dependencies group for dev tools: pip install mypackage[dev]",
          "Use pip-compile to generate a locked requirements.txt from requirements.in",
          "Set up a private package index with devpi; publish a package and install from it",
        ],
      },
    ],
  },
  {
    level: "WEB & APIs",
    color: "#f472b6",
    emoji: "🌐",
    topics: [
      {
        id: 24,
        title: "HTTP & Requests",
        concepts: [
          "HTTP methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS",
          "Status codes: 2xx, 3xx, 4xx, 5xx",
          "Headers: Content-Type, Authorization, Accept, User-Agent",
          "Request body: JSON, form data, multipart",
          "requests.Session — persistent connections, cookies, auth",
          "Authentication: Basic, Bearer token, API key, OAuth2",
          "Timeouts: connect timeout vs read timeout",
          "Retry with backoff: requests + urllib3.util.retry.Retry",
          "Response: .json(), .text, .content, .status_code, .headers",
          "Streaming responses: stream=True for large downloads",
          "SSL verification: verify=True/False, custom CA bundle",
          "Proxies and environment variables",
          "httpx — sync and async, HTTP/2 support",
          "Pagination patterns: offset, cursor, page number",
          "Rate limit handling: Retry-After header, exponential backoff",
          "Webhook signature verification",
        ],
        assignments: [
          "Build a GitHub CLI: list repos, show open PRs, create issues — using GitHub REST API with token auth",
          "Write a robust HTTP client class: retry on 5xx, timeout, session reuse, logging, raise for status",
          "Implement pagination: fetch ALL pages from a paginated API (cursor-based and offset-based)",
          "Download a large file with progress bar using streaming (stream=True + tqdm)",
          "Write a webhook receiver with HMAC signature verification",
          "Rate-limit-aware API client: detect 429, read Retry-After, sleep and retry automatically",
          "Build a REST API wrapper class with method chaining: client.users(123).posts().get()",
          "Write tests for the HTTP client using responses or httpretty to mock HTTP calls",
          "Use httpx for both sync and async in the same codebase; benchmark async vs sync for bulk requests",
          "Implement OAuth2 client credentials flow: exchange client_id/secret for token, auto-refresh on expiry",
        ],
      },
      {
        id: 25,
        title: "FastAPI — Production REST APIs",
        concepts: [
          "Path operations: @app.get, .post, .put, .patch, .delete",
          "Path parameters, query parameters, request body",
          "Pydantic v2 models for request/response validation",
          "Field() — defaults, constraints, description",
          "Response models — what gets serialized back",
          "Status codes: response_model, status_code",
          "Dependency injection: Depends()",
          "Sub-dependencies and dependency overrides for testing",
          "Middleware: CORS, GZip, Trusted Host, custom",
          "Authentication: OAuth2PasswordBearer, HTTPBearer",
          "JWT tokens: creation, validation, expiry (python-jose)",
          "Background tasks: BackgroundTasks",
          "Lifespan events: startup/shutdown (async context manager)",
          "WebSockets: WebSocket, accept, send_text, receive_text",
          "File uploads: UploadFile, File()",
          "Router prefixes and tags: APIRouter",
          "Exception handlers: @app.exception_handler",
          "OpenAPI docs: Swagger UI, ReDoc",
          "async vs sync endpoints — when to use which",
          "Testing with TestClient and httpx.AsyncClient",
          "Uvicorn and Gunicorn deployment",
        ],
        assignments: [
          "Build a Todo REST API: CRUD endpoints, Pydantic v2 models, proper HTTP status codes, error responses",
          "Add JWT authentication: /auth/register, /auth/login, protected routes with Depends(get_current_user)",
          "Implement role-based access control: admin, user, guest — different permissions per role",
          "Add pagination (offset/limit), filtering, and sorting to a list endpoint",
          "Build a file upload endpoint: accept image, validate type/size, save to disk, return URL",
          "Add WebSocket support: real-time notifications broadcast to all connected clients",
          "Write dependency injection for DB connection: get_db() yields a session, closes on exit",
          "Add middleware: request ID injection, timing headers, structured request logging",
          "Write comprehensive tests: unit test each endpoint with dependency overrides for DB and auth",
          "Add rate limiting per user using Redis (via slowapi or custom middleware)",
          "Implement versioned API: /api/v1/ and /api/v2/ with shared and version-specific routers",
          "Deploy with Docker + Gunicorn + Uvicorn workers; add health check /health endpoint",
        ],
      },
      {
        id: 26,
        title: "Web Scraping",
        concepts: [
          "HTTP basics for scraping: GET, headers, cookies",
          "BeautifulSoup4: find, find_all, select (CSS), select_one",
          "Navigating the DOM: parent, children, siblings",
          "Extracting: .text, .get_text(), ['href'], .get('attr', default)",
          "lxml parser vs html.parser — speed vs leniency",
          "Session + cookies for authenticated scraping",
          "Handling pagination: next page links, page number URLs",
          "Rate limiting and polite scraping: time.sleep, random delay",
          "robots.txt — checking before scraping",
          "Rotating User-Agent and headers",
          "Proxy rotation (conceptual)",
          "Playwright — headless browser for JS-rendered pages",
          "playwright: page.goto, page.locator, page.wait_for, screenshots",
          "Scrapy framework — spiders, items, pipelines, middleware",
          "Scrapy shell for interactive testing",
          "Storing scraped data: JSON, CSV, SQLite, MongoDB",
          "Handling anti-scraping: CAPTCHAs (awareness), fingerprinting",
          "Data cleaning after scraping: normalization, deduplication",
        ],
        assignments: [
          "Scrape Hacker News: title, URL, score, comment count — all 30 pages; save to JSON",
          "Build a job listing scraper: extract title, company, salary, location from a job board",
          "Use Playwright to scrape a JS-rendered SPA: click, wait for content, extract data",
          "Build a price tracker: scrape a product price daily, store in SQLite, alert when drops 20%",
          "Write a Scrapy spider with: item pipeline for cleaning, duplicate filter, CSV exporter",
          "Scrape Wikipedia for a list of countries: name, capital, population, area — follow links for details",
          "Build an authenticated scraper: log in using form submission, then access protected pages",
          "Extract structured data from a complex HTML table: handle merged cells, multi-row headers",
          "Scrape images from a gallery site: download all images, name them properly, avoid duplicates",
          "Build a news aggregator: scrape 5 news sites, normalize article format, save to unified schema",
        ],
      },
    ],
  },
  {
    level: "DATABASES",
    color: "#2dd4bf",
    emoji: "🗄️",
    topics: [
      {
        id: 27,
        title: "SQL & SQLAlchemy",
        concepts: [
          "SQL fundamentals: SELECT, INSERT, UPDATE, DELETE, WHERE, ORDER BY, LIMIT",
          "Joins: INNER, LEFT, RIGHT, FULL OUTER, CROSS",
          "Aggregations: GROUP BY, HAVING, COUNT, SUM, AVG, MIN, MAX",
          "Subqueries, CTEs (WITH), window functions",
          "Indexes — types, when to use, EXPLAIN ANALYZE",
          "Transactions: BEGIN, COMMIT, ROLLBACK, isolation levels",
          "SQLAlchemy Core — Table, Column, select(), insert()",
          "SQLAlchemy ORM — declarative_base, Session, query",
          "SQLAlchemy 2.0 style — select(Model), session.execute()",
          "Model relationships: one-to-one, one-to-many, many-to-many",
          "relationship() — lazy, eager (joinedload, selectinload)",
          "Alembic — migration tool",
          "alembic init, revision --autogenerate, upgrade, downgrade",
          "Connection pooling: QueuePool, NullPool, pool_size, max_overflow",
          "Async SQLAlchemy: create_async_engine, AsyncSession",
          "N+1 query problem and solutions",
          "Query optimization: avoid SELECT *, use .only()",
          "SQLite for dev, PostgreSQL for production",
        ],
        assignments: [
          "Design a schema for a blog: Users, Posts, Comments, Tags, PostTags — with proper FKs and indexes",
          "Write SQLAlchemy ORM models for the blog schema; add __repr__ and helper classmethods",
          "Create Alembic migrations for the schema; add a column in a new migration; test upgrade/downgrade",
          "Write queries using SQLAlchemy 2.0 style: get user's posts with comment counts, ordered by date",
          "Demonstrate N+1 problem: load all posts and their authors; fix with joinedload/selectinload",
          "Implement a repository pattern: PostRepository with get, create, update, delete, list_by_user",
          "Use async SQLAlchemy with FastAPI: session per request via dependency injection",
          "Write a bulk insert using insert().values() and benchmark vs individual inserts for 10k rows",
          "Add full-text search to Posts using PostgreSQL's tsvector and GIN index via SQLAlchemy",
          "Implement soft deletes: add deleted_at column, filter it in all queries automatically using a mixin",
          "Set up connection pooling properly for a production FastAPI app; test under concurrent load",
          "Write a database seeder that generates realistic fake data using faker library",
        ],
      },
      {
        id: 28,
        title: "Caching & Redis",
        concepts: [
          "Caching motivations: latency, DB load reduction",
          "Cache-aside (lazy loading) pattern",
          "Write-through cache pattern",
          "Write-back (write-behind) pattern",
          "Cache invalidation strategies",
          "TTL — time to live, expiry",
          "Cache stampede / dog-pile effect and solutions",
          "redis-py: set, get, delete, expire, ttl, exists",
          "redis-py: hset, hget, hgetall — hash maps",
          "redis-py: lpush, rpush, lrange, llen — lists",
          "redis-py: sadd, smembers, sinter — sets",
          "redis-py: zadd, zrange, zrangebyscore — sorted sets",
          "redis-py: incr, incrby, decr — atomic counters",
          "Pub/Sub: publish, subscribe, listen",
          "Redis as a message broker (basic)",
          "Redis Streams (conceptual)",
          "Rate limiting with Redis: INCR + EXPIRE per key",
          "Distributed locks: SET NX EX pattern",
          "redis-py connection pool",
          "aioredis / redis-py async support",
          "Redis eviction policies: LRU, LFU, allkeys-lru",
        ],
        assignments: [
          "Add Redis caching to a slow FastAPI endpoint: cache for 60s, return cached or fresh data",
          "Implement cache invalidation: when a Post is updated, delete the cached post and list",
          "Build a rate limiter using Redis INCR+EXPIRE: 100 requests/min per API key",
          "Implement a distributed lock for a cron job: only one instance runs at a time",
          "Build a leaderboard using Redis Sorted Set: add scores, get top-10, get rank for a user",
          "Implement pub/sub: publisher sends events, multiple subscribers process them",
          "Build a session store using Redis hashes: store user session data with TTL",
          "Write a @cached decorator using Redis: key based on function name + args hash",
          "Solve cache stampede: use a 'probabilistic early expiration' strategy",
          "Build a real-time analytics counter: page views per URL per hour using Redis hash + TTL",
        ],
      },
      {
        id: 29,
        title: "Data Processing with Pandas & NumPy",
        concepts: [
          "NumPy arrays: dtype, shape, ndim, strides",
          "Array creation: zeros, ones, arange, linspace, random",
          "Array operations: broadcasting, vectorization, ufuncs",
          "Indexing: basic, boolean, fancy",
          "NumPy performance vs Python loops — 100x speedup typical",
          "Pandas Series and DataFrame — creation, indexing",
          "read_csv, read_json, read_sql, read_excel, read_parquet",
          "to_csv, to_json, to_sql, to_parquet",
          "Indexing: loc (label), iloc (integer), at, iat",
          "Boolean indexing and query()",
          "groupby: split-apply-combine, agg, transform, apply",
          "merge, join, concat — all forms",
          "pivot_table, melt, stack, unstack",
          "Missing data: isna, notna, fillna, dropna, ffill, bfill",
          "apply() — row/column functions (avoid when possible)",
          "Vectorized string operations: .str accessor",
          "Datetime operations: .dt accessor, resample, rolling",
          "Performance: use vectorized ops, avoid loops, use .eval()",
          "Memory optimization: category dtype, downcast integers",
          "Dask — parallel Pandas for large datasets (conceptual)",
        ],
        assignments: [
          "Load the Titanic dataset: compute survival rate by class, sex, age group — produce a summary table",
          "Merge two DataFrames (orders + customers) on customer_id; aggregate total spend per customer",
          "Clean a messy real-world CSV: fix dtypes, handle nulls, normalize string columns, remove duplicates",
          "Use groupby + agg to compute multiple statistics (mean, median, std, count) in one pass",
          "Implement a rolling 7-day moving average on time-series sales data",
          "Use pivot_table to create a cross-tab: rows=month, columns=product, values=sales",
          "Profile a slow Pandas script using cProfile; replace apply() loops with vectorized operations",
          "Process a 1GB CSV file in chunks (chunksize=) without loading it all into memory",
          "Use .str accessor to extract structured data from a messy text column (parse dates from strings)",
          "Write a report generator: load data, compute KPIs, format output as a well-structured CSV",
          "Use NumPy broadcasting to compute a distance matrix between 1000 points without any Python loops",
          "Compare memory usage of int64 vs int32 vs int16 vs category dtype for a large categorical column",
        ],
      },
    ],
  },
  {
    level: "ARCHITECTURE & PRODUCTION",
    color: "#e879f9",
    emoji: "🏭",
    topics: [
      {
        id: 30,
        title: "Design Patterns",
        concepts: [
          "Creational: Singleton, Factory Method, Abstract Factory, Builder, Prototype",
          "Structural: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy",
          "Behavioral: Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor",
          "Python-specific patterns: Mixin, Descriptor, Borg",
          "Repository pattern — data access abstraction",
          "Service layer pattern — business logic separation",
          "Unit of Work pattern — transaction management",
          "Dependency Injection — constructor, setter, interface injection",
          "SOLID principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion",
          "DRY, YAGNI, KISS principles",
          "Event-driven architecture basics",
        ],
        assignments: [
          "Implement Observer pattern: EventBus with subscribe(event, handler), publish(event, data), unsubscribe",
          "Build a Strategy pattern for sorting: BubbleSort, QuickSort, MergeSort — all interchangeable",
          "Write a Builder pattern for a complex Query object: select().from_().where().order_by().limit()",
          "Implement Command pattern for a text editor: execute, undo, redo commands",
          "Build a Factory Method for DB drivers: create_connection('postgresql') returns a PG connection",
          "Write a Facade for a complex subsystem: EmailFacade hides SMTP, template engine, attachment handling",
          "Implement Proxy pattern: CachingProxy wraps an expensive API and caches results",
          "Design a payment system using Strategy + Factory: plug in Stripe, PayPal, Crypto handlers",
          "Refactor a God Class into multiple focused classes following Single Responsibility Principle",
          "Apply Dependency Injection throughout a service: no hard-coded dependencies, all injected via constructor",
          "Build a Chain of Responsibility for HTTP request processing: auth → rate_limit → validate → handle",
          "Implement the Repository + Unit of Work pattern for a blog app using SQLAlchemy",
        ],
      },
      {
        id: 31,
        title: "Performance & Profiling",
        concepts: [
          "Algorithmic complexity: Big O for time and space",
          "cProfile — function-level profiling",
          "line_profiler (@profile decorator) — line-level profiling",
          "memory_profiler — memory usage per line",
          "tracemalloc — built-in memory tracking",
          "timeit — micro-benchmarks in isolation",
          "perf_counter vs monotonic vs process_time",
          "Python-specific performance pitfalls: global lookups, attribute access in loops, unnecessary copies",
          "Vectorization with NumPy instead of Python loops",
          "Slots for memory-efficient classes",
          "String building: join vs + in loops",
          "Local variable lookups are faster than global",
          "Cython — compiling Python to C (conceptual)",
          "Numba — JIT compilation for numeric code (conceptual)",
          "C extensions — writing Python extensions in C (conceptual)",
          "PyPy — alternative interpreter (awareness)",
          "Profiling in production: py-spy, Austin",
        ],
        assignments: [
          "Profile a data processing script with cProfile; draw the call graph; identify top-3 bottlenecks",
          "Use line_profiler to find the exact lines consuming 80% of time in a function",
          "Compare: list comprehension vs map vs for loop for 1M elements — time and memory",
          "Rewrite a nested Python loop as a NumPy vectorized operation; benchmark the speedup",
          "Use tracemalloc to find a memory leak in a long-running process",
          "Benchmark string concatenation: + in loop vs list + join vs io.StringIO — find the crossover point",
          "Use __slots__ on a class; create 1M instances; compare memory to regular class",
          "Optimize a slow SQL query: use EXPLAIN ANALYZE in PostgreSQL, add index, re-benchmark",
          "Use py-spy to profile a running production process (attach to PID) without restarting it",
          "Implement the same algorithm in: pure Python, NumPy, and Numba; benchmark all three",
        ],
      },
      {
        id: 32,
        title: "CLI Development",
        concepts: [
          "argparse — stdlib argument parsing",
          "Click — decorators-based CLI framework",
          "@click.command, @click.option, @click.argument",
          "Click types: INT, FLOAT, BOOL, Path, Choice, DateTime",
          "Click groups — subcommands: cli add, cli remove, cli list",
          "Click context — passing state between commands",
          "Click testing: CliRunner",
          "Typer — type-annotated CLI (built on Click)",
          "Rich — beautiful terminal output",
          "Rich: Console, Table, Progress, Panel, Syntax, Markdown, Tree",
          "Rich: Live, Spinner, status context manager",
          "Prompt Toolkit — advanced interactive CLIs",
          "tqdm — progress bars for any iterable",
          "Packaging CLI as a script with entry_points",
          "Configuration files for CLIs: ~/.myapp/config.toml",
          "Environment variables for config (12-factor)",
          "Shell completion: click install-completion",
        ],
        assignments: [
          "Build a full CLI todo app with Click: add, list (with --filter), done, delete, --verbose, --json output",
          "Add Click subcommands: todo task add, todo task list, todo project create, todo project list",
          "Rewrite the CLI using Typer with full type annotations; compare code clarity",
          "Use Rich to add: colored output, a Table for list view, a Spinner during async operations",
          "Add a progress bar using Rich Progress for a long import/export operation",
          "Build a git-log-like CLI: show commits with author, date, message — colored with Rich Syntax",
          "Package your CLI with entry_points so it's invocable as a command after pip install",
          "Add shell completion using Click's built-in completion; test in bash and zsh",
          "Build an interactive CLI wizard using Click prompts + Typer: multi-step project setup",
          "Write CliRunner tests for all commands covering success paths and error handling",
        ],
      },
      {
        id: 33,
        title: "CI/CD & DevOps for Python",
        concepts: [
          "Git workflow: feature branches, PR reviews",
          "GitHub Actions — workflow YAML syntax",
          "Jobs, steps, actions, runners (ubuntu-latest)",
          "Workflow triggers: push, pull_request, schedule, workflow_dispatch",
          "Matrix builds: test on Python 3.10, 3.11, 3.12",
          "Caching pip dependencies in CI",
          "Secrets management in GitHub Actions",
          "Python CI pipeline: lint → type-check → test → coverage",
          "Coverage gates: fail if below 80%",
          "Docker — Dockerfile for Python apps",
          "Dockerfile best practices: non-root user, multi-stage build, .dockerignore",
          "docker-compose for local dev: app + postgres + redis",
          "environment variables: python-dotenv, os.environ",
          "12-factor app configuration principles",
          "Secrets management: AWS Secrets Manager, Vault (conceptual)",
          "Deployment strategies: rolling, blue-green (conceptual)",
          "Sentry for error tracking in production",
        ],
        assignments: [
          "Write a GitHub Actions workflow: lint (ruff), type-check (mypy), test (pytest) on every push and PR",
          "Add matrix builds: run the CI on Python 3.10, 3.11, 3.12 in parallel",
          "Add a coverage job: run pytest-cov, fail if coverage drops below 80%, upload to Codecov",
          "Write a Dockerfile for a FastAPI app: multi-stage build, non-root user, health check",
          "Write docker-compose.yml: FastAPI app + PostgreSQL + Redis + Nginx reverse proxy",
          "Set up automatic PyPI publishing on git tag using OIDC trusted publishing (no hardcoded tokens)",
          "Add a scheduled workflow: run a security audit (pip-audit, bandit) weekly",
          "Use GitHub Actions environments to deploy to staging on PR merge, production on release",
          "Integrate Sentry: capture all exceptions in FastAPI, add release tracking and source maps",
          "Set up python-dotenv with a .env.example template and validate all required vars on startup",
        ],
      },
    ],
  },
];
const totalTopics = curriculum.reduce((a, s) => a + s.topics.length, 0);
const totalConcepts = curriculum.reduce((a, s) => s.topics.reduce((b, t) => b + t.concepts.length, a), 0);
const totalAssignments = curriculum.reduce((a, s) => s.topics.reduce((b, t) => b + t.assignments.length, a), 0);

// ── Developmental Explanation Modal ──────────────────────────────────────────
function ConceptModal({ concept, topicTitle, sectionColor, onClose }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setText("");
    setError(null);

    const prompt = `You are a master educator who explains programming concepts using the "Developmental Explanation" method — exactly like explaining how Isaac Newton arrived at F=ma by describing the problems he faced, what he observed, and the step-by-step reasoning that led to the law — rather than just stating the formula.

Apply this same method to explain the following Python concept from the topic "${topicTitle}":

CONCEPT: "${concept}"

Structure your explanation as follows (use markdown-style headers with ##):

## The Problem That Demanded This
Describe the specific, concrete pain that programmers were experiencing BEFORE this concept existed. What broke? What was annoying? What was impossible? Be specific with code examples showing the old, painful way.

## What Early Programmers Noticed
What patterns or observations led toward the solution? What repeated problems pointed to the need? What experiments or attempts were made?

## The Reasoning Chain
Walk through the logical steps, one by one, that lead from "the problem" to "the solution". Show the thinking process, not just the destination. Each step should feel inevitable given the previous one.

## The Concept Crystallized
Now — and only now — introduce the actual concept, syntax, or tool. Show it emerging naturally from the reasoning above. Include concrete code examples.

## How It Works Under the Hood
Explain what Python is actually doing internally. What does the interpreter do? What memory structures are involved? Why does it behave the way it does?

## The Edges and Gotchas
What breaks? What surprises beginners? What are the common mistakes and WHY do they happen (not just what they are)? Show examples.

## Production Reality
How is this actually used in real codebases at companies? What patterns around it have emerged? What do senior engineers know about it that juniors don't?

Be detailed, vivid, and concrete. Use code blocks. Write at least 600 words. Make the reader feel like they discovered the concept themselves.`;

    async function fetchExplanation() {
      const cacheKey = `gemini_explanation_${concept}`;
      const cached = localStorage.getItem(cacheKey);
      
      if (cached) {
        if (!cancelled) {
          setText(cached);
          setLoading(false);
        }
        return;
      }

      try {
        // 1. Try environment variable first (Vite style)
        // 2. Try localStorage
        // 3. Prompt user
        let apiKey = import.meta.env.VITE_GEMINI_API_KEY || localStorage.getItem("GEMINI_API_KEY");
        
        if (!apiKey) {
          apiKey = window.prompt("Please enter your Gemini API key:");
          if (apiKey) {
            localStorage.setItem("GEMINI_API_KEY", apiKey);
          } else {
            throw new Error("Gemini API key is required to generate explanations.");
          }
        }

        // Initialize the new unified SDK
        const ai = new GoogleGenAI({ apiKey });
        
        const response = await ai.models.generateContentStream({
          model: 'gemini-3-flash-preview',
          config: {
            thinkingConfig: {
              thinkingLevel: ThinkingLevel.HIGH,
            },
          },
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
        });

        let fullText = "";
        for await (const chunk of response) {
          if (!cancelled && chunk.text) {
            fullText += chunk.text;
            setText(fullText);
            setLoading(false);
          }
        }

        if (!cancelled) {
          if (!fullText) throw new Error("No explanation returned.");
          localStorage.setItem(cacheKey, fullText);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    fetchExplanation();
    return () => { cancelled = true; };
  }, [concept]);

  // Simple markdown renderer
  function renderMarkdown(raw) {
    const lines = raw.split("\n");
    const elements = [];
    let i = 0;
    let inCode = false;
    let codeLang = "";
    let codeLines = [];
    let key = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.startsWith("```")) {
        if (!inCode) {
          inCode = true;
          codeLang = line.slice(3).trim();
          codeLines = [];
        } else {
          inCode = false;
          elements.push(
            <div key={key++} style={{
              background: "#0a0c14",
              border: "1px solid #1e2538",
              borderRadius: "6px",
              margin: "16px 0",
              overflow: "hidden",
            }}>
              {codeLang && (
                <div style={{
                  padding: "6px 14px",
                  borderBottom: "1px solid #1e2538",
                  fontSize: "10px",
                  color: sectionColor,
                  letterSpacing: "2px",
                  opacity: 0.7,
                }}>
                  {codeLang.toUpperCase()}
                </div>
              )}
              <pre style={{
                margin: 0,
                padding: "16px",
                fontSize: "12px",
                lineHeight: "1.7",
                color: "#a9b7c6",
                overflowX: "auto",
                fontFamily: "'JetBrains Mono','Fira Code',monospace",
              }}>
                <code>{codeLines.join("\n")}</code>
              </pre>
            </div>
          );
          codeLines = [];
          codeLang = "";
        }
        i++;
        continue;
      }

      if (inCode) {
        codeLines.push(line);
        i++;
        continue;
      }

      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={key++} style={{
            fontSize: "14px",
            fontWeight: "700",
            color: sectionColor,
            margin: "28px 0 10px",
            letterSpacing: "0.5px",
            borderLeft: `3px solid ${sectionColor}`,
            paddingLeft: "12px",
          }}>
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={key++} style={{
            fontSize: "13px", fontWeight: "600",
            color: "#d4d4d8", margin: "20px 0 8px",
          }}>
            {line.slice(4)}
          </h3>
        );
      } else if (line.startsWith("- ") || line.startsWith("* ")) {
        elements.push(
          <div key={key++} style={{
            display: "flex", gap: "10px", margin: "5px 0",
            fontSize: "13px", color: "#9ca3af", lineHeight: "1.7",
          }}>
            <span style={{ color: sectionColor, opacity: 0.6, flexShrink: 0 }}>▸</span>
            <span dangerouslySetInnerHTML={{ __html: inlineFormat(line.slice(2)) }} />
          </div>
        );
      } else if (line.match(/^\d+\. /)) {
        const num = line.match(/^(\d+)\. /)[1];
        elements.push(
          <div key={key++} style={{
            display: "flex", gap: "12px", margin: "5px 0",
            fontSize: "13px", color: "#9ca3af", lineHeight: "1.7",
          }}>
            <span style={{
              color: sectionColor, fontWeight: "700", flexShrink: 0,
              fontSize: "11px", marginTop: "2px",
            }}>{num}.</span>
            <span dangerouslySetInnerHTML={{ __html: inlineFormat(line.replace(/^\d+\. /, "")) }} />
          </div>
        );
      } else if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
        elements.push(
          <p key={key++} style={{
            fontWeight: "700", color: "#fff",
            fontSize: "13px", margin: "12px 0 4px",
          }}>
            {line.slice(2, -2)}
          </p>
        );
      } else if (line.trim() === "") {
        elements.push(<div key={key++} style={{ height: "8px" }} />);
      } else {
        elements.push(
          <p key={key++} style={{
            fontSize: "13px", color: "#9ca3af",
            lineHeight: "1.8", margin: "4px 0",
          }}
            dangerouslySetInnerHTML={{ __html: inlineFormat(line) }}
          />
        );
      }
      i++;
    }
    return elements;
  }

  function inlineFormat(text) {
    return text
      .replace(/`([^`]+)`/g, `<code style="background:#0f1117;border:1px solid #1e2538;border-radius:3px;padding:1px 5px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#7dd3fc">$1</code>`)
      .replace(/\*\*([^*]+)\*\*/g, `<strong style="color:#e2e8f0;font-weight:700">$1</strong>`)
      .replace(/\*([^*]+)\*/g, `<em style="color:#c4b5fd">$1</em>`);
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#0d0f18",
          border: `1px solid ${sectionColor}30`,
          borderRadius: "12px",
          width: "100%",
          maxWidth: "760px",
          maxHeight: "88vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: `0 0 60px ${sectionColor}15, 0 32px 64px rgba(0,0,0,0.8)`,
        }}
      >
        {/* Modal Header */}
        <div style={{
          padding: "20px 24px",
          borderBottom: `1px solid ${sectionColor}20`,
          display: "flex",
          alignItems: "flex-start",
          gap: "16px",
          background: `linear-gradient(135deg, ${sectionColor}08 0%, transparent 100%)`,
          flexShrink: 0,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: "9px", letterSpacing: "3px", color: sectionColor,
              opacity: 0.7, marginBottom: "6px", textTransform: "uppercase",
            }}>
              ◉ DEVELOPMENTAL EXPLANATION · {topicTitle}
            </div>
            <h2 style={{
              margin: 0, fontSize: "16px", fontWeight: "700",
              color: "#fff", lineHeight: "1.4",
            }}>
              {concept}
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid #2a2d3a",
              borderRadius: "6px",
              color: "#6b7280", cursor: "pointer",
              width: "32px", height: "32px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "16px", flexShrink: 0, fontFamily: "inherit",
              transition: "all 0.15s",
            }}
          >
            ×
          </button>
        </div>

        {/* Modal Body */}
        <div ref={contentRef} style={{ overflowY: "auto", padding: "24px", flex: 1 }}>
          {loading && (
            <div style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              padding: "60px 20px", gap: "20px",
            }}>
              <div style={{
                width: "40px", height: "40px",
                border: `2px solid ${sectionColor}30`,
                borderTop: `2px solid ${sectionColor}`,
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
              }} />
              <div style={{ color: "#3f3f46", fontSize: "12px", letterSpacing: "2px" }}>
                GENERATING EXPLANATION...
              </div>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          )}
          {error && (
            <div style={{
              padding: "20px", background: "rgba(248,113,113,0.08)",
              border: "1px solid rgba(248,113,113,0.2)", borderRadius: "6px",
              color: "#f87171", fontSize: "13px",
            }}>
              Error: {error}
            </div>
          )}
          {!loading && !error && (
            <div style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>
              {renderMarkdown(text)}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: "12px 24px",
          borderTop: `1px solid ${sectionColor}15`,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexShrink: 0,
        }}>
          <span style={{ fontSize: "10px", color: "#27272a", letterSpacing: "1px" }}>
            CLICK OUTSIDE TO CLOSE
          </span>
          <span style={{ fontSize: "10px", color: sectionColor, opacity: 0.4, letterSpacing: "1px" }}>
            DEVELOPMENTAL METHOD
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [openTopic, setOpenTopic] = useState(null);
  const [activeTab, setActiveTab] = useState("concepts");
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null); // { concept, topicTitle, color }

  const levels = ["ALL", ...curriculum.map(s => s.level)];

  const filtered = curriculum
    .map(section => ({
      ...section,
      topics: section.topics.filter(t =>
        search === "" ||
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.concepts.some(c => c.toLowerCase().includes(search.toLowerCase()))
      ),
    }))
    .filter(s => (filter === "ALL" || s.level === filter) && s.topics.length > 0);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#08090d",
      color: "#d4d4d8",
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
    }}>
      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #0d1117 0%, #0a0d16 50%, #0d0a17 100%)",
        borderBottom: "1px solid #1a1d27",
        padding: "56px 48px 40px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(rgba(74,222,128,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.03) 1px, transparent 1px)`,
          backgroundSize: "40px 40px", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 15% 50%, rgba(74,222,128,0.05) 0%, transparent 100%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", maxWidth: "900px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)",
            borderRadius: "4px", padding: "4px 12px", marginBottom: "20px",
          }}>
            <span style={{ color: "#4ade80", fontSize: "10px", letterSpacing: "3px" }}>◉ PYTHON MASTERY ROADMAP</span>
          </div>
          <h1 style={{
            fontSize: "clamp(32px, 6vw, 60px)", fontWeight: "800",
            margin: "0 0 12px", lineHeight: 1.05, letterSpacing: "-2px", color: "#fff",
          }}>
            Python from Zero<br />
            <span style={{ color: "#4ade80" }}>to Production</span>
          </h1>
          <p style={{ color: "#52525b", fontSize: "13px", margin: "0 0 8px" }}>
            Click any concept for a deep <span style={{ color: "#4ade80" }}>Developmental Explanation</span> — how it came to be, why it exists, how it works.
          </p>
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", marginTop: "28px" }}>
            {[
              { label: "Topics", value: totalTopics },
              { label: "Concepts", value: totalConcepts },
              { label: "Assignments", value: totalAssignments },
            ].map(({ label, value }) => (
              <div key={label}>
                <div style={{ fontSize: "28px", fontWeight: "800", color: "#4ade80", letterSpacing: "-1px" }}>{value}</div>
                <div style={{ fontSize: "10px", color: "#3f3f46", letterSpacing: "2px", textTransform: "uppercase" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{
        background: "#0b0c12", borderBottom: "1px solid #16181f",
        padding: "14px 48px", display: "flex", gap: "12px",
        alignItems: "center", flexWrap: "wrap",
      }}>
        <div style={{ position: "relative", flex: "1", minWidth: "200px", maxWidth: "300px" }}>
          <span style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "#3f3f46", fontSize: "13px" }}>⌕</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search topics, concepts..."
            style={{
              width: "100%", padding: "7px 12px 7px 28px",
              background: "#0f1017", border: "1px solid #1e2030",
              borderRadius: "4px", color: "#d4d4d8", fontSize: "12px",
              fontFamily: "inherit", outline: "none", boxSizing: "border-box",
            }}
          />
        </div>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {levels.map(l => {
            const section = curriculum.find(s => s.level === l);
            const active = filter === l;
            return (
              <button
                key={l}
                onClick={() => setFilter(l)}
                style={{
                  padding: "5px 12px", borderRadius: "3px",
                  border: `1px solid ${active ? (section?.color || "#4ade80") + "60" : "#1e2030"}`,
                  background: active ? (section?.color || "#4ade80") + "12" : "transparent",
                  color: active ? (section?.color || "#4ade80") : "#3f3f46",
                  cursor: "pointer", fontSize: "10px", letterSpacing: "1px",
                  fontFamily: "inherit", transition: "all 0.15s",
                }}
              >
                {section?.emoji && `${section.emoji} `}{l === "ALL" ? "ALL" : l.split(" ").slice(0, 2).join(" ")}
              </button>
            );
          })}
        </div>
      </div>

      {/* Curriculum */}
      <div style={{ padding: "32px 48px 64px", maxWidth: "1100px" }}>
        {filtered.map(section => (
          <div key={section.level} style={{ marginBottom: "52px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <span style={{ fontSize: "18px" }}>{section.emoji}</span>
              <span style={{ fontSize: "10px", letterSpacing: "4px", color: section.color, textTransform: "uppercase" }}>
                {section.level}
              </span>
              <div style={{ flex: 1, height: "1px", background: `${section.color}20` }} />
              <span style={{ fontSize: "10px", color: "#27272a" }}>
                {section.topics.length} topics · {section.topics.reduce((a, t) => a + t.assignments.length, 0)} assignments
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {section.topics.map(topic => {
                const isOpen = openTopic === topic.id;
                return (
                  <div
                    key={topic.id}
                    style={{
                      border: `1px solid ${isOpen ? section.color + "35" : "#16181f"}`,
                      borderRadius: "6px",
                      background: isOpen ? `${section.color}07` : "#0b0c12",
                      overflow: "hidden",
                      transition: "border-color 0.2s, background 0.2s",
                    }}
                  >
                    <button
                      onClick={() => {
                        setOpenTopic(isOpen ? null : topic.id);
                        setActiveTab("concepts");
                      }}
                      style={{
                        width: "100%", padding: "14px 20px",
                        display: "flex", alignItems: "center", gap: "16px",
                        background: "none", border: "none", cursor: "pointer",
                        color: "inherit", fontFamily: "inherit", textAlign: "left",
                      }}
                    >
                      <span style={{ color: section.color, fontSize: "10px", minWidth: "26px", opacity: 0.6 }}>
                        {String(topic.id).padStart(2, "0")}
                      </span>
                      <span style={{
                        flex: 1, fontSize: "13px", fontWeight: "600",
                        color: isOpen ? "#fff" : "#a1a1aa",
                      }}>
                        {topic.title}
                      </span>
                      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                        <span style={{
                          fontSize: "9px", color: section.color, opacity: 0.5,
                          background: `${section.color}10`, padding: "2px 8px",
                          borderRadius: "2px", letterSpacing: "1px",
                        }}>
                          {topic.concepts.length} concepts
                        </span>
                        <span style={{
                          fontSize: "9px", color: "#fbbf24", opacity: 0.6,
                          background: "rgba(251,191,36,0.08)", padding: "2px 8px",
                          borderRadius: "2px", letterSpacing: "1px",
                        }}>
                          {topic.assignments.length} tasks
                        </span>
                        <span style={{
                          color: section.color, opacity: 0.5, fontSize: "16px",
                          transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                          transition: "transform 0.2s", lineHeight: 1,
                        }}>›</span>
                      </div>
                    </button>

                    {isOpen && (
                      <div style={{ borderTop: `1px solid ${section.color}20` }}>
                        {/* Tabs */}
                        <div style={{ display: "flex", borderBottom: `1px solid ${section.color}15` }}>
                          {["concepts", "assignments"].map(tab => (
                            <button
                              key={tab}
                              onClick={() => setActiveTab(tab)}
                              style={{
                                padding: "10px 20px", background: activeTab === tab ? `${section.color}12` : "transparent",
                                border: "none", borderBottom: activeTab === tab ? `2px solid ${section.color}` : "2px solid transparent",
                                color: activeTab === tab ? section.color : "#3f3f46",
                                cursor: "pointer", fontSize: "10px", letterSpacing: "2px",
                                textTransform: "uppercase", fontFamily: "inherit", transition: "all 0.15s",
                              }}
                            >
                              {tab === "concepts" ? `⬡ Concepts (${topic.concepts.length})` : `◈ Assignments (${topic.assignments.length})`}
                            </button>
                          ))}
                        </div>

                        <div style={{ padding: "16px 20px" }}>
                          {activeTab === "concepts" && (
                            <>
                              <div style={{
                                fontSize: "10px", color: "#3f3f46", letterSpacing: "1px",
                                marginBottom: "12px",
                              }}>
                                💡 Click any concept for a deep developmental explanation
                              </div>
                              <div style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                                gap: "6px",
                              }}>
                                {topic.concepts.map((c, i) => (
                                  <button
                                    key={i}
                                    onClick={() => setModal({ concept: c, topicTitle: topic.title, color: section.color })}
                                    style={{
                                      display: "flex", gap: "10px", alignItems: "flex-start",
                                      padding: "10px 12px",
                                      background: "#0f1017",
                                      border: "1px solid #1a1d27",
                                      borderRadius: "4px",
                                      fontSize: "12px", color: "#71717a", lineHeight: "1.5",
                                      cursor: "pointer", fontFamily: "inherit",
                                      textAlign: "left", transition: "all 0.15s",
                                    }}
                                    onMouseEnter={e => {
                                      e.currentTarget.style.borderColor = section.color + "50";
                                      e.currentTarget.style.background = section.color + "0a";
                                      e.currentTarget.style.color = "#a1a1aa";
                                    }}
                                    onMouseLeave={e => {
                                      e.currentTarget.style.borderColor = "#1a1d27";
                                      e.currentTarget.style.background = "#0f1017";
                                      e.currentTarget.style.color = "#71717a";
                                    }}
                                  >
                                    <span style={{ color: section.color, opacity: 0.5, flexShrink: 0, marginTop: "2px" }}>▸</span>
                                    <span style={{ flex: 1 }}>{c}</span>
                                    <span style={{
                                      color: section.color, opacity: 0.3, fontSize: "10px",
                                      flexShrink: 0, marginTop: "1px",
                                    }}>↗</span>
                                  </button>
                                ))}
                              </div>
                            </>
                          )}

                          {activeTab === "assignments" && (
                            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                              {topic.assignments.map((a, i) => (
                                <div
                                  key={i}
                                  style={{
                                    display: "flex", gap: "14px", alignItems: "flex-start",
                                    padding: "12px 16px",
                                    background: "#0f1017",
                                    border: `1px solid ${section.color}18`,
                                    borderLeft: `3px solid ${section.color}60`,
                                    borderRadius: "0 4px 4px 0",
                                  }}
                                >
                                  <span style={{
                                    background: section.color, color: "#000",
                                    fontSize: "9px", fontWeight: "800",
                                    padding: "3px 6px", borderRadius: "2px",
                                    flexShrink: 0, marginTop: "1px", letterSpacing: "0.5px",
                                    minWidth: "28px", textAlign: "center",
                                  }}>
                                    #{i + 1}
                                  </span>
                                  <span style={{ fontSize: "12px", color: "#a1a1aa", lineHeight: "1.6" }}>{a}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        borderTop: "1px solid #16181f", padding: "20px 48px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        color: "#27272a", fontSize: "10px", letterSpacing: "2px",
      }}>
        <span>{totalTopics} TOPICS · {totalConcepts} CONCEPTS · {totalAssignments} ASSIGNMENTS</span>
        <span>DEVELOPMENTAL EXPLANATION ENGINE</span>
      </div>

      {/* Concept Modal */}
      {modal && (
        <ConceptModal
          concept={modal.concept}
          topicTitle={modal.topicTitle}
          sectionColor={modal.color}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}
