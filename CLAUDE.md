@AGENTS.md

# CRITICAL: No AI Attribution

- **NEVER** include "Co-Authored-By: Claude" in commits
- **NEVER** include any Claude/AI attribution in commit messages
- **NEVER** reference Claude or AI assistance in PR descriptions
- **NEVER** mention AI in code comments
- **NEVER** add "Generated with Claude Code" or similar to PR bodies

# GitHub Workflow

## Branch Naming

- `add-<feature>` for new features
- `fix-<issue>` for bug fixes
- `update-<component>` for enhancements

## Before Starting Work

```bash
git checkout main
git pull
```

## Feature Branch Flow

1. Create branch: `git checkout -b <branch-name>`
2. Make focused, atomic commits
3. Push: `git push -u origin <branch-name>`
4. Create PR with `gh pr create`
5. After merge, clean up local and remote branches

## Commit Messages

- Use imperative mood: "Add feature" not "Added feature"
- First line: short summary (50 chars or less)
- Body: explain what and why (not how)
- Stage specific files (preferred over `git add .`)

## PR Template

```markdown
## Summary
- Brief bullet points of what changed

## Test plan
- [ ] Test case 1
- [ ] Test case 2
```
