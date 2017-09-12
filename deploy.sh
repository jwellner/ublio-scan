git commit -am "Saved local changes"
git checkout -B gh-pages
git add -f www
git commit -am "Deployed website"
git filter-branch -f --prune-empty --subdirectory-filter www
git push -f origin gh-pages
git checkout -
