# Make sure our main branch is up to date
git checkout main
git pull

# Remove our former release branch
git branch -D latest-release 2>/dev/null
git push origin --delete latest-release 2>/dev/null

# Create a new branch to run the build under
git checkout -b latest-release

# Ensure we have the latest version of things
rm -rf node_modules # package-lock.json <-- may want to remove this file too if it suits your project.
make install 

# Test validity 
make test

# Run linter
make lint

# Build
make build

# Collect the version number
releaseVersion=`node -e "let package = require('./package.json'); console.log(package.version)"`
releaseVersion="v$releaseVersion" # of the form vX.X.X

# Allow the `dist` folder to be in the release
newIgnore=`sed -e 's#dist##g' .gitignore`
echo "$newIgnore" > .gitignore # the redirect here is put into a spereate step to avoid a locking issue with git
git add -A && git commit -m "[BUILD] $releaseVersion"

# Make a new tag off of the latest build
git checkout main
git tag "$releaseVersion" latest-release
git push origin "$releaseVersion"
git push origin latest-release