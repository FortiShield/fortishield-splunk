---
name: New release
about: "[fortishield-team] Track the effort of the team to release a new version of Fortishield"
title: Support for Fortishield 4.x.x
labels: enhancement
assignees: ''

---

## Description

Example:
> Fortishield 4.3.8 will be released shortly. Our app for Splunk needs to support this new version. From our side, no changes will be included, so we only need to bump the version.

## Tasks

### Pre-release
- [ ] Add support for Fortishield 4.x.x (bump).
- [ ] Generate the required tags.
- [ ] Generate packages.
- [ ] Test the packages, to verify they install, and the app works as expected.
- [ ] [Optional] Run Regression Testing (#issue) 
- [ ] Generate draft releases.
- [ ] Notify the @fortishield/cicd and @fortishield/content teams that the release is good to go, from our side.

### Post-release
- [ ] Make draft releases final and public.
- [ ] Sync branches.
- [ ] Update [Compatibility Matrix](https://github.com/fortishield/fortishield-splunk/wiki/Compatibility).

### Supported versions

Same as on previous releases: listed on our [supported versions](https://github.com/fortishield/fortishield-splunk/blob/master/scripts/tag.py#L7-L13).
