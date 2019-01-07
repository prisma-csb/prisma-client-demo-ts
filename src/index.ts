const description = `
Welcome to the Prisma client explorer in CodeSandbox! 👋

There are three folders with scripts that you can use to play around with the Prisma client API:

📖 src/reading-data
✏️ src/writing-data (writes are disabled by default)
⭐️ src/more-data-access 

⚠️ IMPORTANT: Database writes are disabled by default! Please fork this CodeSandbox and use your own Prisma Demo server to perform database writes. Visit www.prisma.io/get-started to learn how to setup a Prisma Demo server.

▶️ To run an example script, you need to use the embedded terminal here in CodeSandbox. 
Click on "Terminal" below and then click the "+"-button to open a new terminal tab.
In the new terminal tab, you can now run any example by running "yarn" followed by the name of the example, 
e.g. "yarn create-update-delete" or "yarn upsert".

🙋‍♀️ In some code snippets, you find placeholders looking like this "__USER_ID__" or "__POST_ID__". In order to run these snippets properly, you need to replace those placeholders with actual ID values. You can obtain these IDs by running: "yarn load-ids"

PS. Feel free to hide the browser that CodeSandbox opens by default - you don't need it as you're just running terminal scripts.
`;

console.log(description);
