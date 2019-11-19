# Test case - Duplicate class names in Ivy

Exporting two components with the same class name, but in different modules results in a run-time error in Ivy:

```
ERROR in Cannot resolve type entity ɵngcc1.LegacyLibComponent$1 to symbol
```

## Repo Contents

* legacy-lib — an Angular 8.x library that exports two components with identical class names:
  * `legacy-lib-component-1` declared in `src/lib/module-1/lib.component` as `LegacyLibComponent`.
  * `legacy-lib-component-2` declared in `src/lib/module-2/lib.component` as `LegacyLibComponent`.
  * The components are included in `Module1` and `Module2` which are in turn re-exported by `LegacyAppModule`.
* **ivy-app** — an Angular 9.x application that fails to compile due to the described problem.
* **legacy-app** — an Angular 8.x application that runs without issues.
