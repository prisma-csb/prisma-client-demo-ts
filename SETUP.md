# Get Your Own Prisma Client Explorer

This project uses a hosted database that has writes disabled. Follow these steps to set up your own demo database that lets you perform database writes:

### 1. Fork the CodeSandbox

To get your own version of this sandbox, click the **Fork** button in the top-left corner:

![](https://imgur.com/aTCEfuD.png)

### 2. Open new Terminal tab

Once the forking succeeded and you have your own version of the sandbox available, you can open a new terminal tab by clicking the little **+** button:

![](https://imgur.com/iWwZ1yD.png)

### 3. Deploy datamodel & re-generate Prisma client

The next step connects the Prisma client code in in the scripts with a fresh demo database that will be set up for you. In the terminal, run: 

```
yarn prisma deploy
```

Then, follow these steps in the interactive CLI wizard:

1. Select **Demo server**
1. **Open the URL** that's printed by the CLI in your browser 
1. **Authenticate** with Prisma Cloud in your browser
1. Back in the CodeSandbox terminal, **confirm all suggested values**

### 4. Explore the Prisma client API

After `prisma deploy` has terminated, the Prisma client in `src/generated/prisma-client` is re-generated. This means any script you're running now will read or write data in your own demo database.

Run the following command to start exploring:

```
yarn start
```