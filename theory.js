// Init command
// use to create a new git repo means first make project on pc then upload on git repo

// git init
// git add .
// git commit -m "message"
// git remote add origin url   (remote means add new repository)
// git remote -v to verify remote
// git branch  to check branch
// git branch -M main  to rename branch
// git push origin main
// git push -u origin main  (-u means set-upstreams means dont rewite origin main)

// in case you want to change remote url means change another reposititory
// git remote set-url origin url

// in case above trick doesn't work do this:-
// 1. Check Your Branch Name
// git branch

// 2. If you don't see "main" in the list, it means the branch does not exist yet. You can create it using:
// git checkout -b main

// 3. Add and Commit Changes:
// Ensure that you have made some changes to your code and committed those changes.
// If you haven't committed anything, Git may not have anything to push.
// git add .
// git commit -m "Your commit message here"

// 4. Push to the Remote Repository:
// Once you have committed your changes, you can push them to the remote repository using the following command:
// git push origin main

// 5. Check Remote Repository:
// git remote -v
// notes
