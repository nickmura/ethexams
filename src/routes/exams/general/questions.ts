let question_list = [
	{
        question: "What definition best describes a node?",
        answers: [
            "A software client that participates in the network, that verifies transaction data.", 
            "Miners compete with each other to solve arbitrary puzzles to help prevent gaming the system, and to provide consensus on transactions.", 
            "Appending transactions to a block.", 
            "Proposing blocks."],
        correctAnswer: "A software client that participates in the network, that verifies transaction data.",
        selectedAnswer: '',
        dropdown: 'See an explanation for a correct definition of a node, a software client.',
        explanation: `<a href='https://ethereum.org/en/developers/docs/nodes-and-clients/' target='_blank'>(Ethereum.org, Nodes and Clients)</a>  
        <i>"'Node' refers to a running piece of client software. A client is an implementation of Ethereum that verifies all transactions 
        in each block, keeping the network secure and the data accurate."</i>`,
        category: ['Consensus']
	}, 
    {
        question: "What is the most widely used and supported implementation of the Ethereum protocol?",
        answers: ["Parity", "py-ethereum", "Geth", "evmone"],
        correctAnswer: "Geth",
        selectedAnswer: '',
        dropdown: 'See an explanation for how we understood Geth is the most widely used.',
        explanation: `Parity and py-ethereum have been deprecated (evm-py now stands.) Geth stands as the most widely used and documented implementation with a discord community. Evmone acts as one of the implementations developed by the Ewasm (Ethereum WebAssembly, now deprecated) team. <a href="https://geth.ethereum.org/" target='_blank'>geth.ethereum.org</a> , <a href"https://github.com/ethereum/evmone" target='_blank'> evmone repository (ewasm)</a>`,
        category: ['Consensus', 'N/A']
	}, 
    
    {
        question: "What value is chosen as a nonce when submitting an Ethereum transaction?",
        answers: [
        "A counter for the current total amount of valid transactions the originating address has made.", 
        "The variable length binary data payload", 
        "An entire sequence of all transactions with their data serialization payload.", 
        "A pseudorandom number is issued for authentication, namely to ensure that communications cannot be reused (replay attack)"],
        correctAnswer: 'A counter for the current total amount of valid transactions the originating address has made.',
        selectedAnswer: '',
        dropdown: "See why and what specific nonce we are referring to.",
        explanation: `<a href='https://github.com/ethereumbook/ethereumbook/blob/develop/06transactions.asciidoc#the-transaction-nonce' target='_blank'>(Mastering Ethereum, pg, 100-101, Chapter 6 Transactions, The Transaction Nonce)</a> 
        <i>"The nonce is one of the most important and least understood components of a transaction. The definition in the Yellow Paper 
        (see [references]) reads: 'nonce: A scalar value equal to the number of transactions sent from this address or, 
        in the case of accounts with associated code, the number of contract-creations made by this account.' ...In practical terms, the nonce
        is an up-to-date count of the number of confirmed (i.e., on-chain) transactions that have originated from an account."</i> This question
        is not referring to the proof of work nonce, which is defined as 'Proof of work nonce: a meaningless value in a 
        block which can be adjusted in order to try to satisfy the proof of work condition'.`,
        category: ['Cryptography', 'Wallets', 'Consensus', 'Transactions']
	},
    
    {
        question: "What is Ethereum EOAs derived from?",
        answers: [
            "Private keys", 
            "Keccak256 one-way hash function",
            "Elliptic curve multiplication",
            "Public keys"],
        correctAnswer: 'Public keys',
        selectedAnswer: '',
        dropdown: 'See an explanation why wallet addresses are derived from public keys.',
        explanation: `
        Public keys are derived from the one way hash function, however, 
        the EOA address (standard addresses) are derived from the public key, specifically, the last 20 bytes
        of the public key, or last 40 characters of the public key. <a href="https://ethereum.org/en/developers/docs/accounts/#account-creation">(Ethereum.org, Account Creation)</a> 
        <i>"The public key is generated from the private key using the Elliptic Curve Digital Signature Algorithm. You get a public address 
        for your account by taking the last 20 bytes of the Keccak-256 hash of the public key and adding 0x to the beginning."</i>`,
        category: ['Solidity', 'Cryptography']
    },
    
    {
        question: "What is the digital signature algorithm used in Ethereum?",
        answers: [
            "Digital Signature Algorithm (DSA)", 
            "Elliptic Curve Digital Signature Algorithm (ECDSA)", 
            "Aggregate signature scheme", 
            "Zero knowledge proof protocols"],
        correctAnswer: 'Elliptic Curve Digital Signature Algorithm (ECDSA)',
        selectedAnswer: '',
        dropdown: "See an explanation for the correct signature algorithm.",
        explanation: `<a href="https://github.com/ethereumbook/ethereumbook/blob/develop/06transactions.asciidoc#the-elliptic-curve-digital-signature-algorithm" target="_blank">(pg 115, Chapter 6 Transactions, Digital Signatures)</a> 
        <i>"The digital signature algorithm used in Ethereum, is the Elliptic Curve Digital Signature Algorithm (ECDSA). It's based on elliptic curve
        private-public key pairs..."</i> More information provided here - <a href='https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm' target='_blank'>(Wikipedia.org, ECDSA)</a>`,
        category: ['Transactions', 'Cryptography']
        },
    {
        question: "Where is the originating address derived from in a serialized transaction?",
        answers: [
            "The originating address is provided in the structure of the serialized binary message.", 
            "The originating address can be derived from the data payload of the binary message.", 
            "The originating address is derived from metadata from transactional intermediaries.", 
            "The public key is derived from the v, r, s components of the digital signature, which in turn can derive the originating address."],
        correctAnswer: 'The public key is derived from the v, r, s components of the digital signature, which in turn can derive the originating address.',
        selectedAnswer: '',
        dropdown: "See why Ethereum addresses are derived from v, r, s components of the serialized binary message.",
        explanation: `<a href="https://github.com/ethereumbook/ethereumbook/blob/develop/06transactions.asciidoc#the-structure-of-a-transaction" target="_blank">
        (pg 115, Chapter 6 Transactions, The Structure of a Transaction)</a> <i>"For example, you may notice there is no 'from' data in the address identifying the originator EOA.
        That is because the EOA's public key can be derived from the v, r, s components of the ECDSA signature.
        The address can, in turn, be derived from the public key. When you see a transaction showing a "from"
        field, that was added by the software used to visualize the transaction."</i>`,
        category: ['Cryptography', 'Transactions']
    },
    {
        question: "What is the difference between a value and data payloads?",
        answers: [
            "The data payload is used as a sequence for all transactions from the originating address, and the value payload is used to specify the amount of value sent to an address.", 
            "The data payload is used to interact, call, and execute functions from smart contracts, and the value payload is used to specify the amount of ether (value) sent to an address.", 
            "The originating address is derived from metadata from transactional intermediaries.", 
            "The data payload is typically used to interpret and call instructions to intermediaries,such as wallets."],
        correctAnswer: 'The data payload is used to interact, call, and execute functions from smart contracts, and the value payload is used to specify the amount of ether (value) sent to an address.',
        selectedAnswer: '',
        dropdown: "See the an explanation for the difference between the transaction payloads.",
        explanation: `<a href="https://github.com/ethereumbook/ethereumbook/blob/develop/06transactions.asciidoc#transaction-value-and-data" target="_blank">
        (pg 115, Chapter 6 Transactions, Transaction Value and Data)</a> <i>"A transaction with only value
        is a payment. A transaction with only data is an invocation. A transaction with both value and data is
        both a value and invocation."</i>`,
        category: ['Transactions']
    },
    {
        question: "What is the best definition to define 'consensus'?",
        answers: [
            "An on-chain governance process for a state change.", 
            "A formalized general agreement to attain the majority of the nodes on the network agree on the next global state of the network.", 
            "Used to decide which node has the longest chain validated, will be the one the rest of the nodes accept as valid.", 
            "Consensus governs a formalized agreement on the nodes of a given network."],
        correctAnswer: 'A formalized general agreement to attain the majority of the nodes on the network agree on the next global state of the network.',
        selectedAnswer: '',
        dropdown: "See an explanation for the best definition for consensus.",
        explanation: `<a href="https://ethereum.org/en/developers/docs/consensus-mechanisms/" target="_blank">
        (Ethereum.org, Consensus Mechanisms)</a> <i>"By consensus, we mean that a 
        general agreement has been reached... In regards to blockchain, the process is formalized, and reaching
        consensus means that at least 51% of the nodes on the network agree on the next global state of the network."</i>
        The wrong answers are partial truths and only convey a single aspect of consensus.`,
        category: ['Consensus']
    },
    {
        question: "What statement is false about decentralized applications (dapp)?",
        answers: [
            "A dapp runs on a peer-to-peer infrastructure service or platform, delegating control as much as possible.", 
            "Dapp(s) perform the same function ignoring the environment they are executed in, providing a one-dimensional state.", 
            "A dapp executes its services in an isolated virtual environment (EVM) which eliminates an obstruction to the rest of the network.", 
            "All dapp(s) are open source."],
        correctAnswer: 'All dapp(s) are open source.',
        selectedAnswer: '',
        dropdown: "See why not all dapps are open source.",
        explanation: `<a href=" https://en.wikipedia.org/wiki/Decentralized_application" target="_blank">
        (Wikipedia.org, Decentralized application)</a> <i>"By consensus, we mean that a 
        general agreement has been reached... In regards to blockchain, the process is formalized, and reaching
        consensus means that at least 51% of the nodes on the network agree on the next global state of the network."</i> 
        The wrong answers are partial truths and only convey a single aspect of consensus.`,
        category: ['Solidity', 'N/A']
    },
    {
        question: "Solidity is classified as a declarative language.",
        answers: [
            "True", 
            "False"],
        correctAnswer: 'False',
        selectedAnswer: '',
        dropdown: "See why Solidity is more of an imperative language.",
        explanation: `Much like other object-oriented programming languages, solidity has aspects of declarative or
        functional programming however, it has a global scope and is very much object-oriented. <a href="https://en.wikipedia.org/wiki/Solidity target='_blank'>
        (Wikipedia.org, Solidity)</a>"`,
        category: ['Solidity']
    },
    {
        question: "What is 10 to the exponent of 21, of Wei equal to?",
        answers: [
            "1 ether", 
            "1000 ether", 
            "A dapp executes its services in an isolated virtual environment (EVM) which eliminates an obstruction to the rest of the network.", 
            "0.1 ether"],
        correctAnswer: '1000 ether',
        selectedAnswer: '',
        dropdown: "See why 10^21 is equivalent to 1000 ether.",
        explanation: `<a href="https://eth-converter.com/" target="_blank">
        eth-converter.com</a> From the docs, 1 ether is denoted as 1^18 (1, followed by 18 zeros). 10^21 is 1, followed by 21 zeros. From the docs, So, it is equivalent to
        adding 3 zeros after 1 ether, which is 1000.`,
        category: ['Solidity', 'N/A']
    },
    {
        question: "What is the difference between implicit and explicit type conversion?",
        answers: [
            "An implicit type conversion automatically converts one type to another type by the compiler, and explicit conversion is manually done to tell the compiler to convert one type to another type.", 
            "An implicit type conversion manually converts one type to another type, as no data has been lost, and explicit conversion automatically converts one type to another type.", 
            "An explicit conversion allows types of a smaller size to be stored on a larger type, and an implicit conversion allows values of a smaller size to be stored on a larger size.", 
            "There is no difference between implicit and explicit conversion"],
        correctAnswer: 'An implicit type conversion automatically converts one type to another type by the compiler, and explicit conversion is manually done to tell the compiler to convert one type to another type.',
        selectedAnswer: '',
        dropdown: "See how an implicit conversion is done automatically and explicit is done manually.",
        explanation: `<a href="https://docs.soliditylang.org/en/v0.8.0/types.html?highlight=memory#conversions-between-elementary-types" target="_blank">
        (docs.soliditylang.org, Conversions between elementary types)</a> <i>"An implicit type conversion is automatically applied by the compiler in some cases during assignments..."</i> 
        <i>"If the compiler does not allow implicit conversion but you are confident a conversion will work, explicit type conversion is sometimes 
        possible. This may result in unexpected behavior and allows you to bypass some security features of the compiler, so be sure to test that 
        the result is what you want and expect!"</i> Explicit conversions are done manually by the developer, and can result in an unexpected
        behavior.`,
        category: ['Solidity']
    },
    {
        question: "What utility does gas have in Ethereum?",
        answers: [
            "It is used to make contracts faster.", 
            "Gas is used to control the number of resources a transaction can use, and the priority of your transaction to be confirmed.", 
            "Gas is used to control the number of transactions a block can have stored within itself, and the priority of a transaction to be confirmed.", 
            "Gas controls the speed of state changes."],
        correctAnswer: 'Gas is used to control the number of resources a transaction can use, and the priority of your transaction to be confirmed.',
        selectedAnswer: '',
        dropdown: "See an explanation for the utility for Gas in Ethereum.",
        explanation: `<a href="https://github.com/ethereumbook/ethereumbook/blob/develop/06transactions.asciidoc#transaction-gas" target="_blank">
        (Mastering Ethereum, pg 105-106, Chapter 6 Transactions, Transaction Gas)</a> <i>"..Ethereum uses gas to control the amount of resources that
        a transaction can use since it will be processed on thousands of computers around the world. ...Wallets can adjust the gasPrice in transactions
        they originate to achieve faster confirmation of transactions. The higher the gasPrice, the faster the transaction is likely to be confirmed."</i>`,
        category: ['Transactions', 'Consensus', 'Solidity']
    },
    {
        question: "What is the purpose of a constructor?",
        answers: [
            "A function that initializes the state of the contract with instructions, ran when you deploy the contract.", 
            "It is a different name for a function.", 
            "A constructor makes external calls to other functions.", 
            "Deploys the contract."],
        correctAnswer: 'A function that initializes the state of the contract with instructions, ran when you deploy the contract.',
        selectedAnswer: '',
        dropdown: "See an explanation for the function that initalizes state in a smart contract.",
        explanation: `<a href="https://docs.soliditylang.org/en/v0.8.13/contracts.html#constructors" target="_blank">
        (soliditylang.org, Constructors) </a>  <i>"A constructor is an optional function
        declared with the constructor keyword which is executed upon contract creation, and where you can run contract initialization code."</i>`,
        category: ['Solidity']
    },
    {
        question: "What are the functions for error handling in Solidity?",
        answers: [
            "Assert, require, throw", 
            "Events, require, revert", 
            "Events, require, revert, throw.", 
            "Assert, require, revert."],
        correctAnswer: 'Assert, require, revert.',
        selectedAnswer: '',
        dropdown: "See a clarification for the error handling functions in Solidity.",
        explanation: `<a href="https://github.com/ethereumbook/ethereumbook/blob/develop/07smart-contracts-solidity.asciidoc" target="_blank">
        (Mastering Ethereum, pg 148, Chapter 7 Smart Contracts and Solidity, Error Handling (assert, require revert))</a> <i>"A contract call can terminate 
        and return an error. Error handling in Solidity is handled by four functions: assert, require, revert, and throw (now deprecated)."</i> `,
        category: ['Transactions', 'Solidity']
    },
    {
        question: "What was one of the first major vulnerabilities in Ethereum smart contracts and the most well-known?",
        answers: [
            "Arithmetic under/overflow", 
            "Delegatecall attack", 
            "Re-entrancy", 
            "Poor entropy"],
        correctAnswer: 'Re-entrancy',
        selectedAnswer: '',
        dropdown: "See what the first major exploit was in Ethereum.",
        explanation: `<a href="https://github.com/ethereumbook/ethereumbook/blob/develop/09smart-contracts-security.asciidoc#real-world-example-the-dao" target="_blank">
        (Mastering Ethereum, pg 177, Chapter 9 Smart Contract Security, Real World Example: The DAO)</a> <i>"The DAO (Decentralized Autonomous Organization) attack was
        one of the major hacks that occurred in the early development of Ethereum. At the time, the contract held over $150 million.
        Reentrancy played a major role in the attack, which ultimately led to hard fork that created Ethereum Classic (ETC)."</i> The DAO is
        considered one of the first known exploited contracts in Ethereum, and the most notable. Technical analysis can be <a href="https://bit.ly/2EQaLCI" target="_blank">found here.</a> `,
        category: ['Solidity', 'Security']
    },
    {
        question: "Which statement best defines a re-entrancy attack?",
        answers: [
            "The DAO attack.", 
            "Using a malicious contract to call the function of another contract.", 
            "Using a contract to be called on a malicious contract, makes a call back to the malicious contract.", 
            "When a malicious contract calls a function from another contract, the malicious contract makes a recursive call using that function."],
        correctAnswer: 'When a malicious contract calls a function from another contract, the malicious contract makes a recursive call using that function.',
        selectedAnswer: '',
        dropdown: "See a full explanation for a re-entrancy attack.",
        explanation: `<a href="https://github.com/ethereumbook/ethereumbook/blob/develop/09smart-contracts-security.asciidoc#reentrancy" target="_blank">
        (Mastering Ethereum, pg 173, Chapter 9 Smart Contract Security, Reentrancy)</a> <i>"One of the features of Ethereum smart contracts is their ability to call and 
        utilize code from other external contracts. Contracts also typically handle ether, and as such often send ether to various external
        user addresses. These operations require the contracts to submit external calls. These external calls can be hijacked by attackers,
        who can force the contracts to execute further code (through a fallback function), including calls back into themselves. Attacks of
        this kind were used in the infamous DAO hack. ...This type of attack can occur when a contract sends ether to an unknown address. 
        An attacker can carefully construct a contract at an external address that contains malicious code in the fallback function. Thus, 
        when a contract sends ether to this address, it will invoke the malicious code."</i>`,
        category: ['Solidity', 'Security']
    },
    {
        question: "Which of these statements about oracles is false?",
        answers: [
            "Oracles collect data from an off-chain source.", 
            "The data is authenticated on the chain as well as off-chain.", 
            "Transfer the data on the chain with a signed message.", 
            "The data becomes available in a smart contract's storage."],
        correctAnswer: 'The data is authenticated on the chain as well as off-chain.',
        selectedAnswer: '',
        dropdown: "See why data is not authenticated on chain.",
        explanation: `Oracle data can only be authenticated as its data streams are not always deterministic as state transitions and blockchains are fully deterministic.
        Blockchains are also completely isolated networks for reliability in computing information. This problem is outlined and is defined as "The Oracle Problem".
        <a href="https://blog.chain.link/what-is-the-blockchain-oracle-problem/" target="_blank">
        (chain.link, What is the blockchain oracle problem?)</a> <i>"The oracle problem revolves around a very simple limitation — blockchains cannot pull in data 
        from or push data out to any external system as built-in functionality. As such, blockchains are isolated networks, akin to a computer with no Internet connection.
        The isolation of a blockchain is the precise property that makes it extremely secure and reliable, as the network only needs to form a consensus on a very basic set 
        of binary (true/false) questions using data already stored inside of its ledger. ...The very narrow focus of blockchain consensus is why smart contracts are referred
        to as being deterministic, they execute exactly as written with a much higher degree of certainty than traditional systems. ...Bridging the connection between the blockchain 
        (on-chain) and the outside world (off-chain) requires an additional and separate piece of infrastructure known as an oracle."</i>`,
        category: ['Solidity']
    },
    {
        question: "Ethereum is used for data storage on-chain. (True or false)",
        answers: [
            "True", 
            "False"],
        correctAnswer: 'False',
        selectedAnswer: '',
        dropdown: "See why it's impractical to store data on chain.",
        explanation: `Although trivial amounts of data are stored on-chain (a transaction size is 110 bytes (scroll down more than halfway 
            <a href="https://vitalik.ca/general/2021/01/05/rollup.html" target="_blank">Vitalik's blog, An incomplete guide to rollups</a>)) a block size can only store a maximum of 30 million gas, which is equivalent to 1.875 MB.
            <a href="https://eips.ethereum.org/EIPS/eip-4488" target="_blank">(Ethereum.org, EIP 4488)</a> "...today, the average block size is 60-90 kB, but the maximum block size is 30M / 16 = 1,875,000 bytes"
            (Having trouble finding the succinct source to provide concise documentation on gas to bytes). 30M gas is very expensive, so to store anything that isn't
            trivial would be a huge waste of resources and would run into performance and accessibility issues using a ledger as storage."`,
        category: ['Solidity', 'Infrastructure', 'Transactions']
    },
    {
        question: "Failed transactions modify the global state of the Ethereum ecosystem in a calculable way, with no uncertainty. (True or false)",
        answers: [
            "True", 
            "False"],
        correctAnswer: 'True',
        selectedAnswer: '',
        dropdown: "See why failed transactions create state transitions.",
        explanation: `Although trivial amounts of data are stored on-chain (a transaction size is 110 bytes (scroll down more than halfway 
            <a href="https://vitalik.ca/general/2021/01/05/rollup.html" target="_blank">Vitalik's blog, An incomplete guide to rollups</a>)) a block size can only store a maximum of 30 million gas, which is equivalent to 1.875 MB.
            <a href="https://eips.ethereum.org/EIPS/eip-4488" target="_blank">EIP 4488</a> <i>"...today, the average block size is 60-90 kB, but the maximum block size is 30M / 16 = 1,875,000 bytes"</i>
            (Having trouble finding the succinct source to provide concise documentation on gas to bytes). 30M gas is very expensive, so to store anything that isn't
            trivial would be a huge waste of resources and would run into performance and accessibility issues using a ledger as storage.</a>"`,
        category: ['Transactions']
    },
    {
        question: "What is front-running?",
        answers: [
            "Illegal activity", 
            "Having knowledge of transactions before they execute for your advantage.",
            "MEV opportunities.",
            "Paying miners money."],

        correctAnswer: 'Having knowledge of transactions before they execute for your advantage.',
        selectedAnswer: '',
        dropdown: "See a more in depth definition and clarification of front running.",
        explanation: `A Front running is a general term to attribute the idea of insider trading in the form of capitalizing on pending transactions
        that will influence the price or outcome when they execute. <a href="https://en.wikipedia.org/wiki/Front_running" target="_blank">(Wikipedia.org, Front running)</a>
        The way users on Ethereum can find pending transactions to execute is by watching the 'mempool' (transactions not picked up by miners) Relevant or vulnerable transactions to be exploited are called which are called 'MEV opportunities'.
        MEV is the idea of providing the maximum value that can be extracted by miners from block production.
        <a href="https://ethereum.org/en/developers/docs/mev/" target="_blank">(Ethereum.org, MEV)</a> In this case for transactions, its gas being the maximum value extractable. 
        More gas and your transaction are prioritized. So, a user finds an MEV opportunity to front run, and then with that
        knowledge, creates an identical transaction, except with much more gas, essentially bribing the block producers (miners) to append their transaction first, which results
        in an unfavorable outcome for the former transaction. To front run, you must apply MEV. <a href="https://github.com/ethereumbook/ethereumbook/blob/develop/09smart-contracts-security.asciidoc#race-conditionsfront-running" target="_blank">(Mastering Ethereum, pg 205, Chapter 9 Smart Contract Security, Race Conditions/Front Running The Vulnerability)</a>
        <i>"The miner who solves the block also chooses which transactions from the pool 
        will be included in the block, typically ordered by the gasPrice of each transaction. Here is a potential attack vector. An attacker can watch the transaction pool for transactions that may 
        contain solutions to problems, modify or revoke the solvers permissions or change the state in a contract detrimentally to the solver. The attacker can then get the data 
        from this transaction and create a transaction of their own with a higher gasPrice so their transaction is included in a block before the original."</i>`,
        category: ['Transactions', 'Infrastructure']
    },
    {
        question: "Every contract deployed to Ethereum is there forever. (True or false)",
        answers: [
            "True", 
            "False"],
        correctAnswer: 'True',
        selectedAnswer: '',
        dropdown: "See how the chain preserves the instance of a contract.",
        explanation: `Every deployment of a contract is immutable, meaning no one can change the logic, or location where it exists. Another
        instance of the contract must be deployed if any changes are to be made to the code. A contract is identified by its address, which will never expire.
            <a href="https://github.com/ethereumbook/ethereumbook/blob/develop/07smart-contracts-solidity.asciidoc#what-is-a-smart-contract" target="_blank">(Mastering Ethereum, pg 128, Chapter 7 Smart Contracts and Solidity, What is a Smart Contract?)</a> 
            <i>"Immutable: Once deployed, the code of a contract cannot change. Unlike traditional software, the only way to modify a smart contract is to deploy a new instance."</i> 
            <a href='https://ethereum.org/en/developers/docs/smart-contracts/#what-is-a-smart-contract' target="_blank">
            (Ethereum.org, What is a smart contract?)</a> <i>"..Smart contracts cannot be deleted by default, and interactions with them are irreversible."</i>`,
        category: ['Transactions', 'Solidity']
    },
    {
        question: "What is a transaction nonce?",
        answers: 
        [   "A transaction nonce is a transaction counter in each account, to prevent replay attacks.", 
            "A transaction nonce is a random value within a block to satisfy the proof of work mechanism.", 
            "An index starting at zero.", 
            "Used to index the specific transaction you have initiated."],
        correctAnswer: 'A transaction nonce is a transaction counter in each account, to prevent replay attacks.',
        selectedAnswer: '',
        dropdown: "See an explanation for the difference between the transaction nonce and the proof of work nonce.",
        explanation: `<a href="https://ethereum.org/en/glossary/#nonce" target="_blank">
        (Ethereum.org, glossary)</a>, <i>"In cryptography, [a nonce is] a value that can only be used once. There are two types of the nonce used in Ethereum- an account nonce is a transaction 
        counter in each account, which is used to prevent replay attacks; a proof-of-work (not transaction) nonce is a random value 
        in a block that was used to satisfy the proof-of-work."</i>`,
        category: ['Transactions', 'Consensus']
    },
    {
        question: "How do Ethereum nodes transmit and validate signed transactions to achieve consensus?",
        answers: 
        [   "Once a transaction has been signed, it is transmitted to all nodes at the same time to be validated.", 
            "A signed transaction is validated by a node and then transmitted to multiple nodes to also be validated, and so forth until every node validates the transaction.", 
            "A signed transaction is picked up by a node and validated, then transmitted to another node to also be validated, and so forth.", 
            "A validated transaction from one node is broadcasted to another until majority of nodes validate that transaction, therefore the network reaches a consensus on that transaction."],
        correctAnswer: 'A validated transaction from one node is broadcasted to another until majority of nodes validate that transaction, therefore the network reaches a consensus on that transaction.',
        selectedAnswer: '',
        dropdown: "See an explanation for how transactions are validated to achieve consensus.",
        explanation: `<a href="https://github.com/ethereumbook/ethereumbook/blob/develop/06transactions.asciidoc#transaction-propagation" target="_blank">
        (Mastering Ethereum, pg 123, Chapter 6 Transactions, Transaction Propagation)</a>, <i>"The Ethereum uses a "flood routing" protocol. ...Transaction propagation 
        starts with the originating node creating.. or receiving a signed transaction.. The transaction is validated and then transmitted to all the other Ethereum 
        nodes that are directly connected to the originating node. On average, each Ethereum node maintains connections to at least 13 other nodes.. called its 
        neighbors... Each neighbor validates the transaction as soon as they receive it. As a result, the transaction ripples outwards from the originating node, 
        flooding across the network, until all nodes have a copy of the transaction."</i> Nodes can transmit or propagate transactions to multiple nodes 
        concurrently, which allows the network to validate transactions and achieve consensus so quickly and efficiently.`,
        category: ['Consensus', 'Transactions']
    },
    {
        question: "What changes the state of Ethereum?",
        answers: 
        [   "Nodes", 
            "Contracts", 
            "Miners", 
            "Transactions"],
        correctAnswer: 'Transactions',
        selectedAnswer: '',
        dropdown: "See how transactions change the state of Ethereum.",
        explanation: `<a href="https://github.com/ethereumbook/ethereumbook/blob/develop/06transactions.asciidoc#transactions" target="_blank">
        (Mastering Ethereum, pg 123, Chapter 6 Transactions, Transactions)</a>, <i>"...Ethereum is a global singleton state machine, and transactions are what make
        that state machine "tick", changing its state. Contracts don't run on their own. Ethereum doesn't run autonomously. Everything starts
        with a transaction."</i>`,
        category: ['Transactions']

    },
    {
        question: "What is the best definition of arithmetic under/overflow?",
        answers: 
        [   "A integer data type is represented out of the range of the fixed size of a data type.", 
            "An odometer going over 999999, and resetting back to 0.", 
            "Any data type being under or over-represented in its fixed-size range.", 
            "An under or over-representation of a fixed size data type."],
        correctAnswer: 'A integer data type is represented out of the range of the fixed size of a data type.',
        selectedAnswer: '',
        dropdown: "See a definition of arithmetic under/overflow.",
        explanation: `The EVM specifies fixed-size data types for integers. This means an integer can
        only represent only a specific range of numbers. For instance, a uint8 cannot represent a number
        over 255. Solidity >0.8.0 under/overflow on integer data types are simply reverted (unless using unchecked keyword,
        which saves gas.)`,
        category: ['Solidity'],
    },
    {
        question: "Why are mnemonic seed phrases so powerful?",
        answers: 
        [   "The BIP-39 generates mnemonic words using a SHA256 hash of a random sequence of 128bit or 256bit and is given a checksum of 4 or 8 bits. Then that is split into 12 or 24 11-bit mnemonic words.", 
            "The BIP-39 generates mnemonic words using generated using a SHA256 hash of a random sequence of 256bit or 512bit and is given a checksum of 8 or 16 bits. Then that is split into 24 or 48 11-bit mnemonic words.", 
            "The mnemonic words (12 or 24) are passed to a key stretching function using HMAC-SHA512 which produces an interoperable 512bit value as an output, which is the seed. There are 2^512 permutations.", 
            "The mnemonic words (24 or 48) are passed to a key stretching function using HMAC-SHA256 or HMAC-SHA512 which produces an interoperable 512bit value as an output, which is the seed. There are 2^512 permutations."],
        correctAnswer: 'The mnemonic words (12 or 24) are passed to a key stretching function using HMAC-SHA512 which produces an interoperable 512bit value as an output, which is the seed. There are 2^512 permutations.',
        selectedAnswer: '',
        dropdown: "See how transactions change the state of Ethereum.",
        explanation: `Mnemonic phrases are first generated using the 128 or 256 bits of a SHA256 hash (let SHA256 hash = ENT). Then, a checksum is applied (CS) which is 
        ENT / 32 (ENT / 32 = CS) which the quotient will either be 4 or 8 bytes. We can then divide this new (ENT + CS) / 12 or 24 (depending on 128bit or 256bit mnemonic) which will
        return an 11-bit per word mnemonic of the hash, using a list of 2048 words for each unique word... Then a binary seed is created, using the PBKDF2 (Password-Based Key Derivation Function 2)
        function, and is applied to the mnemonic and an optional passphrase which can be the "salt". PBKDF2 uses a pseudorandom function, which in this case will be HMAC-SHA512. The length
        of the key is 512 bits. <a href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki#generating-the-mnemonic" target="_blank">
        BIP-39 Mnemonic Code Words</a>, <a href="https://github.com/ethereumbook/ethereumbook/blob/develop/06transactions.asciidoc#transactions" target="_blank">
        (Mastering Ethereum, pg 85-92, Chapter 5 Wallets, Mnemonic Code Words (BIP-39))</a>`,
        category: ['Wallets', 'Cryptography']
    },
    {
        question: "What is the best definition for the 'Check-Effect-Interact' pattern?",
        answers: 
        [   "A fail-safe mechanism in case a side effect occurs.", 
            "A safe way to create smart contract code to mitigate the chances of side effects or vulnerabilities.", 
            "Object-oriented programming paradigm", 
            "A 'check' is a required argument for permission to affect the state variables and instructions. 'Effects' are changes to the state variables or transitions of the current contract. 'Interact' is simply the interactions or calls with or to other contracts or addresses. These steps should be done in order, to mitigate the chances of side effects or vulnerabilities."],
        correctAnswer: `A 'check' is a required argument for permission to affect the state variables and instructions. 'Effects' are changes to the state variables or transitions of the current contract. 'Interact' is simply the interactions or calls with or to other contracts or addresses. These steps should be done in order, to mitigate the chances of side effects or vulnerabilities.`,
        selectedAnswer: '',
        dropdown: "See a full explanation/definition for the 'Check-Effect-Interact' pattern.",
        explanation: `<a href="https://docs.soliditylang.org/en/v0.6.11/security-considerations.html#use-the-checks-effects-interactions-pattern" target="_blank">
        (soliditylang.org, Check-Effects-Interactions)</a>, <i>"Most functions will perform some checks (who called the function, are the arguments in range, did they send enough Ether, does the
            person have tokens, etc). These checks should be done first.
            In the second step, if all checks are passed, effects on the state variables of the current contract should be made. Interaction with other
            contracts should be the very last step in any function."</i> Interaction is what provides you with the transaction or state transition.`,
        category: ['Solidity']
    },
    {
        question: "What is the general standard for fungible tokens in Ethereum?",
        answers: 
        [   "ERC-721", 
            "ERC-777", 
            "ERC-1155", 
            "ERC-20"],
        correctAnswer: `ERC-20`,
        selectedAnswer: '',
        dropdown: "See the standard for fungible tokens.",
        explanation: `<a href="https://ethereum.org/en/developers/docs/standards/tokens/" target="_blank">
        (Ethereum.org, Token Standards)</a>`,
        category: ['Solidity']
    },
    {
        question: "What does the EVM instruction set NOT do bytecode operations for?",
        answers: 
        [   "Arithmetic and bitwise logic operations", 
            "Execution context inquiries", 
            "Stack, memory, and storage access, as well as control flow operations.", 
            "Ledger propagations or implementations"],
        correctAnswer: `Ledger propagations or implementations`,
        selectedAnswer: '',
        dropdown: "See the bytecode operations for the EVM.",
        explanation: `<a href="https://github.com/ethereumbook/ethereumbook/blob/develop/13evm.asciidoc#the-evm-instruction-set-bytecode-operations" target="_blank">
        (Mastering Ethereum, pg 300, Chapter 13 The Ethereum Virtual Machine, The EVM Instruction Set)</a>
        <i>"The EVM instruction set offers most of the operations you might expect, including:
        <li></li>
        <li>- Arithmetic and bitwise logic operations</li>
        <li>- Execution context inquiries</li>
        <li>- Stack, memory, and storage access</li>
        <li>- Control flow operations</li>
        <li>- Logging, calling, and other operators</li>"</i>`,
        category: ['Infrastructure']
    },
    {
        
        question: "What are EIPs (Ethereum Improvement Proposals)?",
        answers: 
        [   "Standards for ethereum", 
            "Introducing and specifying new standards formally, for new features and information regarding Ethereum", 
            "A 'source of truth'", 
            "New features or processes for Ethereum"],
        correctAnswer: `Introducing and specifying new standards formally, for new features and information regarding Ethereum`,
        selectedAnswer: '',
        dropdown: "See the definition for EIPs.",
        explanation: `<a href="https://eips.ethereum.org/EIPS/eip-1" target="_blank">
        (Ethereum.org, EIP-1)</a>, <i>"..EIP stands for Ethereum Improvement Proposal. An EIP is a design document 
        providing information to the Ethereum community, or describing a new feature for Ethereum or its processes or environment. The EIP should 
        provide a concise technical specification of the feature and a rationale for the feature. The EIP author is responsible for building 
        consensus within the community and documenting dissenting opinions." An EIP is made to document and provide the specification of a standard,
        creating a consensus of understanding amongst the Ethereum community."</i>`,
        category: ['Consensus', 'Infrastructure']
    },
    {  
        question: "Why is security so important when deploying or creating smart contracts?",
        answers: 
        [   "They are immutable", 
            "Attackers if caught will not go to jail or be recognized.", 
            "Side effects, vulnerabilities, and bugs can cost money (lots of funds, usually) if exploited, and are virtually impossible to recover.", 
            "New features or processes for Ethereum"],
        correctAnswer: `Side effects, vulnerabilities, and bugs can cost money (lots of funds, usually) if exploited, and are virtually impossible to recover.`,
        selectedAnswer: '',
        dropdown: "Here's an explanation why security and auditing is so important in smart contract development.",
        explanation: `<a href="https://ethereum.org/en/developers/docs/smart-contracts/security/" target="_blank">
        (Ethereum.org, Smart Contract Security)</a>, <i>"Ethereum smart contracts 
        are extremely flexible, capable of both holding large quantities of tokens (often in excess of $1B) and 
        running immutable logic based on previously deployed smart contract code. While this has created a vibrant 
        and creative ecosystem of trustless, interconnected smart contracts, it is also the perfect ecosystem 
        to attract attackers looking to profit by exploiting vulnerabilities in smart contracts and unexpected 
        behavior in Ethereum... assets that have been stolen from smart contracts are irrecoverable, 
        and stolen assets are extremely difficult to track. The total amount of value stolen or lost 
        due to smart contract issues is easily over $1B."</i>`,
        category: ['Solidity', 'Security']
    },
    {
        question: "Testnet networks provide monetary value and have real-world value at stake. (True or false)",
        answers: [
            "True", 
            "False"],
        correctAnswer: 'False',
        selectedAnswer: '',
        dropdown: "Testnets have no real value.",
        explanation: `<a href="https://ethereum.org/en/developers/docs/networks/" target="_blank">
        (Ethereum.org, Networks)</a>, <i>"..ETH on testnets has no real value; therefore, 
        there are no markets for testnet ETH. Since you need ETH to actually interact with Ethereum, most people get testnet ETH from faucets."</i>`,
        category: ['N/A', 'Solidity']
    
    },
    {
        question: "What is the best definition of Proof of Stake?",
        answers: 
        [   "Proof of stake uses drastically less energy than PoW.", 
            "The consensus mechanism for ETH that selects validators in proportion to their quantity of holdings in ETH.", 
            "A stake of value for computational power.", 
            "The consensus mechanism for ETH 2.0 selects miners in proportion to their quantity of holdings in ETH."],
        correctAnswer: `The consensus mechanism for ETH that selects validators in proportion to their quantity of holdings in ETH.`,
        selectedAnswer: '',
        dropdown: "Here's an explanation for Proof of Stake.",
        explanation: `<a href="https://en.wikipedia.org/wiki/Proof_of_stake" target="_blank">
        (Wikipedia.org, Proof of stake)</a>, <i>"..protocols are a class of consensus mechanisms for 
        blockchains that work by selecting validators in proportion to their quantity of holdings in the associated cryptocurrency."</i>
        Concise proof-of-stake information and documentation are elusive relative to proof-of-work. There are multiple implications necessary
        especially for validators that differ from the latter (proof-of-work). Check out Ethereums' docs here for PoS: <a href="https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/" target="_blank">
        Ethereum.org, (Proof of stake)</a>`,
        category: ['Consensus']
    },
    {
        question: "Which statement is false about Proof of Work?",
        answers: 
        [   "PoW was very important for the construction of Bitcoin.", 
            "PoW requires computational effort from miners to find the next correct or valid block.", 
            "PoW is computationally inexpensive and uses a thousandth of the required energy that Proof of Stake uses.", 
            "PoW networks' can be attacked if an attacker controls more than half the total network hashing power."],
        correctAnswer: `PoW is computationally inexpensive and uses a thousandth of the required energy that Proof of Stake uses.`,
        selectedAnswer: '',
        dropdown: "Here's an explanation how proof of stake is computationally expensive.",
        explanation: `<a href="https://en.wikipedia.org/wiki/Proof_of_stake" target="_blank">
        (Wikipedia.org, Proof of stake, under Energy consumption)</a>, <i>"In 2021 a study found that
        in general the energy consumption of the Proof-of-Work based Bitcoin was about 1,000 times higher than that of
        the highest [energy] consuming proof of stake system that was studied under the most favorable conditions..."</i>  
        The entire electrical energy consumption of Ethash is equivalent to the Philippines, and the carbon footprint
        is equivalent to Hungary. Check out a resource for Ethereum's energy consumption <a href="https://digiconomist.net/ethereum-energy-consumption/" target="_blank">
        here.</a>`,
        category: ['Consensus']
    },
    /**{
        question: "Testnet networks provide monetary value and have real-world value at stake. (True or false)",
        answers: [
            "True", 
            "False"],
        correctAnswer: 'False',
        selectedAnswer: '',
        dropdown: "Testnets have no real value.",
        explanation: `<a href="https://ethereum.org/en/developers/docs/networks/" target="_blank">
        Ethereum.org, (Networks)</a>, "..ETH on testnets has no real value; therefore, 
        there are no markets for testnet ETH. Since you need ETH to actually interact with Ethereum, most people get testnet ETH from faucets."`
    },--- Shit fucking question */
    {
        question: "Ethereum addresses are derived from public keys or contracts, of a Keccak256 hash function. (True or false)",
        answers: [
            "True", 
            "False"],
        correctAnswer: 'True',
        selectedAnswer: '',
        dropdown: "Here's how ethereum addresses are derived from Keccak256.",
        explanation: `<a href="https://github.com/ethereumbook/ethereumbook/blob/develop/04keys-addresses.asciidoc#ethereum-addresses" target="_blank">
        (Mastering Ethereum, pg 73, Chapter 4 Cryptography, Ethereum Addresses)</a>, <i>"Ethereum addresses are unique identifiers that are derived from public keys or contracts
        using the Keccak256 one-way hash function."</i> Each address is derived from Keccak256, but more specifically contracts don't have
        public keys so they are generated directly from the hash function.`,
        category: ['Cryptography']

    },
    {
        question: "What is an example of a standard RPC/API provider?",
        answers: 
        [   "Metamask", 
            "Rinkeby", 
            "Infura", 
            "Ganache"],
        correctAnswer: `Infura`,
        selectedAnswer: '',
        dropdown: "See what an RPC provider entails.",
        explanation: `<a href="https://docs.ethers.io/v5/api/providers/jsonrpc-provider/" target="_blank">
        (ethers.io, JSON RPC providers)</a>, <i>"The JSON-RPC API is a popular method for interacting with Ethereum and is
        available in all major Ethereum node implementations (e.g. Geth and Parity) as well as many third-party web services (e.g. INFURA)".</i> <a href="https://ethereum.org/en/developers/docs/nodes-and-clients/#alternatives" target="_blank">
        Ethereum.org, (Nodes and clients)</a>, <i>"Running your own node can be difficult and you don't always need to run your own instance. In this 
        case, you can use a third-party API provider like Infura, Alchemy, or QuikNode..."</i> Localhost can be an RPC provider however it is not standard for everyone (although it is 
        encouraged if you have the resources available)`,
        category: ['Solidity', 'Transactions']
    },
    {
        question: "Why is entropy/randomness so difficult for programs to achieve on Ethereum?",
        answers: 
        [   "Transactions can achieve randomness from external sources.", 
            "EVM execution must be completely deterministic and based on the consensus of the global state every node needs to agree on the output of the transaction.", 
            "Infura", 
            "Ganache"],
        correctAnswer: `EVM execution must be completely deterministic and based on the consensus of the global state every node needs to agree on the output of the transaction.`,
        selectedAnswer: '',
        dropdown: "See an explanation why randomness is difficult for programs to achieve.",
        explanation: `<a href="https://github.com/ethereumbook/ethereumbook/blob/develop/11oracles.asciidoc#why-oracles-are-needed" target="_blank">
        (Mastering Ethereum, pg 253, Chapter 11 Oracles, Why Oracles Are Needed)</a>, "In order to maintain consensus, EVM execution must be totally deterministic 
        and based only on the shared context of the Ethereum state and signed transactions. This has two particularly important consequences: the first is that there can be no intrinsic
        source of randomness for the EVM and smart contracts to work with; the second is that extrinsic data can only be introduced as the data payload of a transaction. ...To understand 
        the prohibition of a truly random function in the EVM to provide randomness for smart contracts, consider the effect on attempts to achieve consensus after the execution of such a 
        function: node A would execute the command and store 3 on behalf of the smart contract in its storage, while node B, executing the same smart contract, would store 7 instead. Thus,
        nodes A and B would come to different conclusions about what the resulting state should be, despite having run the same code in the same context."`,
        category: ['Consensus', 'Solidity', 'Oracles', 'Cryptography']
    },
    {
        question: "Why is code simplicity, and readability so important in Solidity / smart contract development?",
        answers: 
        [   "Complexity is poor security design, and readability makes it easier for people to comprehend and audit.", 
            "Readability allows people to understand code, complexity makes it difficult to attack contracts.", 
            "Smart contracts run in a public execution environment.", 
            "Defensive programming is key to having a reliable program."],
        correctAnswer: "Complexity is poor security design, and readability makes it easier for people to comprehend and audit.",
        selectedAnswer: '',
        dropdown: "See why code readability and simplicity creates a safer environment for your contract.",
        explanation: `Complexity enables disharmony, inevitable abstraction, and poor interpretation of something that should be
        objectively and concisely defined, as it increases the chances of unintended side effects with possibly massive consequences.
        Abstraction is essentially pretending something is less complicated than it is, which has negative connotations when developing
        an application that can have potentially large sums of value to exploit. Things need to be simple as possible to comprehend, which
        also plays into readability, which enables consensus when working in an open source and public environment such as Ethereum. Any
        user will be able to read your smart contract code if wanted, and collaborators, auditors, and security analysts ideally need to 
        understand your code with collectively to follow some of the best design patterns.
        <a href="https://github.com/ethereumbook/ethereumbook/blob/develop/11oracles.asciidoc#why-oracles-are-needed" target="_blank">
        (Mastering Ethereum, pg 171, Ch 9 Smart Contract Security, Security Best Practices)</a>, <i>"Minimalism/Simplicity: Complexity is the enemy of security. 
        The simpler the code, and the less it does, the lower the chances are of a bug or unforeseen effect occurring. When first engaging in 
        smart contract programming, developers are often tempted to try to write a lot of code. Instead, you should look through your smart contract 
        code and try to find ways to do less, with fewer lines of code, less complexity, and fewer 'features.'" ... "Your code should be clear and easy to 
        comprehend. The easier it is to read, the easier it is to audit. Smart contracts are public, as everyone can read the bytecode and 
        anyone can reverse-engineer it. Therefore, it is beneficial to develop your work in public, using collaborative and open source 
        methodologies, to draw upon the collective wisdom of the developer community and benefit from the highest common denominator of 
        open source development."</i>`,
        category: ['Solidity', 'Security']
    },
    {
        question: "What is the significance of smart contract inheritance?",
        answers: 
        [   "They allow better documentation.", 
            "They provide reusable implementations of important security and functionality behaviors.", 
            "They provide inheritance and security features.", 
            "They keep track of standards in contracts."],
        correctAnswer: "They provide reusable implementations of important security and functionality behaviors.",
        selectedAnswer: '',
        dropdown: "See why smart contract inheritance is important in Solidity.",
        explanation: `
        <a href="https://ethereum.org/en/developers/docs/smart-contracts/libraries/" target="_blank">
        (Ethereum.org, Smart contract libraries)</a>, <i>"You don't need to write every smart contract in your project from scratch. 
        There are many open source smart contract libraries available that provide reusable building blocks for your project that can save you from having to reinvent 
        the wheel." "When writing smart contracts, there is a good chance you'll find yourself writing similar patterns over and over, like assigning an admin address 
        to carry out protected operations in a contract, or adding an emergency pause button in the event of an unexpected issue. Smart contract libraries usually 
        provide reusable implementations of these behaviors as libraries or via inheritance in Solidity." "As an example, the following is a simplified version of the 
        Ownable contract from the OpenZeppelin Contracts library, which designates an address as the owner of a contract, and provides a modifier for restricting access 
        to a method only to that owner."</i> Another example would be the ERC20 contract designed by OpenZeppelin that can be found <a href="https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol" target="_blank">here.</a>`,
        category: ['Solidity']
    },
    {
        question: "A version of the GHOST protocol will be used in Ethereum's new consensus mechanism, Proof of Stake. (True or False)",
        answers: [
            "True", 
            "False"],
        correctAnswer: 'True',
        selectedAnswer: '',
        dropdown: "See how GHOST protocol will be implemented.",
        explanation: `<a href="https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/#fork-choice" target="_blank">
        (Ethereum.org, Fork choice)</a>, <i>"When the network performs optimally and honestly, there is only ever one new block at the 
        head of the chain, and all validators attest to it. However, it is possible for validators to have different 
        views of the head of the chain due to network latency or because a block proposer has equivocated. Therefore, 
        consensus clients require an algorithm to decide which one to favor. The algorithm used in proof-of-stake 
        Ethereum is called LMD-GHOST, and it works by identifying the fork that has the greatest weight of attestations 
        in its history."</i> What it means by 'greatest weight of attestations', is the chain with the most amount of votes
        (attestations) gets favored by the network.`,
        category: ['Consensus', 'Infrastructure']
    },
    {
        question: "What is Gasper?",
        answers: 
        [   "Casper-CBC and LMD-GHOST.", 
            "The consensus mechanism securing proof of stake on Ethereum, using Casper-FGG and LMD-GHOST.", 
            "Casper-FGG and LMD-GHOST.", 
            "The consensus mechanism securing proof of stake on Ethereum, using Casper-CBC and LMD-GHOST."],
        correctAnswer: "The consensus mechanism securing proof of stake on Ethereum, using Casper-FGG and LMD-GHOST.",
        selectedAnswer: '',
        dropdown: "See how Gasper will be implemented.",
        explanation: `
        <a href="https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/gasper/" target="_blank">
        (Ethereum.org, Gasper)</a>, <i>"Gasper is a combination of Casper the Friendly
        Finality Gadget (Casper-FFG) and the LMD-GHOST fork choice algorithm. 
        Together these components form the consensus mechanism securing proof-of-stake Ethereum."</i> 
        Gasper is necessary for validators approving and rejecting blocks, as well as incentives and rewards for validators, and the fork of the chain to build on. (Not
        longest chain rule, similar, however, see validator attestations <a href="https://kb.beaconcha.in/attestation" target="_blank">here</a>)`,
        category: ['Consensus', 'Infrastructure']
    },
    {
        question: "What is the goal of consensus in the context of Ethereum?",
        answers: 
        [   "Synchronizing state on distributed systems, reaching agreement on a single system-wide state.", 
            "Getting the next valid block of the chain.", 
            "Validators proposing aggregations.", 
            "The consensus mechanism securing proof of stake on Ethereum, using Casper-CBC and LMD-GHOST."],
        correctAnswer: "Synchronizing state on distributed systems, reaching agreement on a single system-wide state.",
        selectedAnswer: '',
        dropdown: "See an simplified explanation for the goal of conensus.",
        explanation: `
        <a href="https://ethereum.org/en/developers/docs/consensus-mechanisms/#what-is-consensus" target="_blank">
        (Ethereum.org, What is consensus?)</a>, <i>"In regards to blockchain, the process is formalized, and reaching consensus 
        means that at least 51% of the nodes on the network agree on the next global state of the network."</i>
        <a href="https://github.com/ethereumbook/ethereumbook/blob/develop/14consensus.asciidoc#consensus" target="_blank">(Mastering Ethereum, pg 319, Chapter 14 Consensus, Consensus)</a> 
        <i>"The term consensus predates blockchains and is related to the broader problem such that different participants in a distributed 
        system all (eventually) agree on a single system-wide state. This is called 'reaching consensus.'"</i>)`,
        category: ['Consensus']
    },
    {
        question: "What is the use case for a modifier function?",
        answers: 
        [   "Calls other functions, ran when you deploy the contract.", 
            "Applied to other functions to initialize state.", 
            "Applied to other functions to create conditions that apply to many functions.", 
            "Used to initialize contract state."],
        correctAnswer: "Applied to other functions to create conditions that apply to many functions.",
        selectedAnswer: '',
        dropdown: "See what a modifier is used for.",
        explanation: `
        <a href="https://docs.soliditylang.org/en/v0.8.13/contracts.html#function-modifiers" target="_blank">
        (soliditylang.org, Function modifiers)</a>, <i>"Modifiers can be used to change the behavior 
        of functions in a declarative way. For example, you can use a modifier to automatically check a condition before executing the 
        function."</i>
        <a href="https://github.com/ethereumbook/ethereumbook/blob/develop/07smart-contracts-solidity.asciidoc#function-modifiers" target="_blank">(Mastering Ethereum, pg 145, Chapter 7 Smart Contracts and Solidity, Function Modifiers)</a>
        <i>"Solidity offers a special type of function called a function modifier. 
        You apply modifiers to functions by adding the modifier name in the function declaration. Modifiers are most often used to create 
        conditions that apply to many functions within a contract."</i> Functions can use modifiers from other 
        contracts that have been inherited. For instance, the 'Ownable' library contract has a modifier onlyOwner that you can use on any 
        function as long as you inherit the Ownable contract.`,
        category: ['Solidity']
    },
    {
        question: "What is the difference between front-running and MEV?",
        answers: 
        [   "MEV is finding opportunities to take advantage of via a gas war, front running is a vulnerability that is a byproduct of how transactions are processed on Ethereum", 
            "Front running is a general term to describe taking advantage of pending transactions, while MEV is the act of miners prioritizing including pending transactions to blocks that provide the most value.", 
            "Front running is illegal, while MEV is not.", 
            "Front running is the act of miners prioritizing adding pending transactions to blocks that provide the most value, while MEV is the term to describe taking advantage of pending transactions."],
        correctAnswer: "Applied to other functions to create conditions that apply to many functions.",
        selectedAnswer: '',
        dropdown: "See a full explanation for the difference between front running and MEV.",
        explanation: `Front running has been a general term to describe insider trading in traditional finance 
        (taking advantage of pending transactions, more info <a href="https://en.wikipedia.org/wiki/Front_running" target="_blank">
        here, wikipedia page for front running</a>, however emphasis on 'insider'. Much of the information and transactions in traditional front-running are not public. All transactions on 
        Ethereum is public, however not conspicuous. MEV is a byproduct of how transactions are processed on Ethereum. Concerning front running - whoever transaction has the most gas 
        will be prioritized to be included first (generally MEV is the idea that any excess of standard rewards will be prioritized). 'MEV opportunities', a term to describe finding front-
        running opportunities of pending transactions on Ethereum (not very visible info). 'MEV' in this term means we can take advantage of this transaction by providing more gas 
        than the original transaction, ensuring our transaction will be processed before the original.
        <a href="https://ethereum.org/en/developers/docs/mev/" target="_blank">(Ethereum.org, MEV)</a>
        <i>"Maximal extractable value (MEV) refers to 
        the maximum value that can be extracted from block production in excess of the standard block reward and gas fees by including, excluding, and changing the order of transactions in a block."</i>
        In other words, front-running is inherently nefarious, and MEV is a byproduct of how Ethereum works (which people take advantage of).`,
        category: ['Consensus', 'Solidity', 'Security']
    },
    {
        question: "What is the use of a require statement?",
        answers: 
        [   "To ensure valid conditions of inputs or state variables are met and validate values.", 
            "Applied to other functions to initialize state.", 
            "To test internal error exceptions and invariants.", 
            "Flagging an error and reverting a transaction."],
        correctAnswer: "To ensure valid conditions of inputs or state variables are met and validate values.",
        selectedAnswer: '',
        dropdown: "See what a require statement is used for.",
        explanation: `
        <a href="https://docs.soliditylang.org/en/v0.8.13/contracts.html#function-modifiers" target="_blank">
        (soliditylang.org, Function modifiers)</a>, <i>"Modifiers can be used to change the behavior 
        of functions in a declarative way. For example, you can use a modifier to automatically check a condition before executing the 
        function."</i>
        <a href="https://docs.soliditylang.org/en/v0.4.24/control-structures.html#error-handling-assert-require-revert-and-exceptions" target="_blank">soliditylang.org, (Error handling)</a>
        <i>"The assert function should only be used to test for internal errors, and to check invariants. The require function should be used to ensure valid conditions, such as inputs, or contract state 
        variables are met, or to validate return values from calls to external contracts."</i>`,
        category: ['Solidity']
    },
    {
        question: "Which is NOT a use case for Oracles?",
        answers: 
        [   "Providing results for sports games", 
            "Providing random numbers on Ethereum", 
            "Providing price feed data", 
            "Providing user interaction with smart contracts"],
        correctAnswer: "Providing user interaction with smart contracts",
        selectedAnswer: '',
        dropdown: "See why an oracle isn't for user end interaction with smart contracts.",
        explanation: `
        <a href="https://github.com/ethereumbook/ethereumbook/blob/develop/11oracles.asciidoc#oracle-use-cases-and-examples" target="_blank">
        (Mastering Ethereum, pg 254, Chapter 11 Oracles, Oracle Use Cases and Examples)</a>, <i>"Oracles, ideally, provide a trustless (or at least 
            near-trustless) way of getting extrinsic (i.e., "real-world" or off-chain) information, such as the results of football games, the 
            price of gold, or truly random numbers, onto the Ethereum platform for smart contracts to use." ... "All oracles provide a few key 
            functions, by definition. These include the ability to: Collect data from an off-chain source. Transfer the data on-chain with a 
            signed message. Make the data available by putting it in a smart contract's storage."</i>
            Oracles are an explicit process for collecting
            off-chain data coming from a discrete and (hopefully) authenticated source of data. Interaction with a contract is not necessarily
            discrete or authenticated in a formal manner such as an oracle data provider, which it's only goal is to provide data that is only
            needed for an immediate decision.`,
        category: ['Oracles']
    },
    {
        question: "What is the purpose of an Event in Solidity?",
        answers: 
        [   "Recording and providing transcation logs of an argument type(s), analagous to a print function.", 
            "Print function.", 
            "Providing results.", 
            "To ensure valid conditions of inputs or state variables are met and validate values."],
        correctAnswer: "Providing user interaction with smart contracts",
        selectedAnswer: '',
        dropdown: "See a full explanation for the purpose of an event.",
        explanation: `
        <a href="https://docs.soliditylang.org/en/v0.5.3/contracts.html#events" target="_blank">
        (soliditylang.org, Events)</a>, <i>"Events are inheritable members of contracts. When you call them, they cause the 
        arguments to be stored in the transaction’s log - a special data structure in the blockchain. These logs are associated with the address of the contract, 
        are incorporated into the blockchain, and stay there as long as a block is accessible (forever as of the Frontier and Homestead releases, but this might 
        change with Serenity). The Log and its event data are not accessible from within contracts (not even from the contract that created them)."</i>
        Events provide a message of the events that occurred during the execution of a transaction, typically within a function invocation.
        <a href="https://github.com/ethereumbook/ethereumbook/blob/develop/07smart-contracts-solidity.asciidoc#events" target="_blank">(Mastering Ethereum, pg 149, Chapter 7 Smart Contracts and Solidity, Events)</a>
         <i>"Event objects take arguments that are serialized and recorded in the transaction logs, 
         in the blockchain."</i>`,
        category: ['Solidity']
    },
    {
        question: "In solidity, if you divide 5 by integer 2, the result is:",
        answers: 
        [   "2", 
            "2.5", 
            "3", 
            "Error, reverts"],
        correctAnswer: "2",
        selectedAnswer: '',
        dropdown: "See why integer literals or decimal numbers aren't supported in Solidity.",
        explanation: `
        <a href="https://docs.soliditylang.org/en/develop/types.html#rational-and-integer-literals" target="_blank">
        (soliditylang.org, Rational and integer literals)</a>, <i>"Division on integer literals used to truncate in Solidity prior to version 0.4.0, but it now converts into 
        a rational number, i.e. 5 / 2 is not equal to 2, but to 2.5."</i>
        Decimal numbers aren't supported in Solidity
        for results, however, you can use them as an assignment (for example uint a = 1/3 * 6) would still work
        however its result would be only the whole number of the decimal.`,
        category: ['Solidity']
    },
    {
        question: "What is the best definition of an ICO (Initial coin offering)?",
        answers: 
        [   "A vehicle and mechanism for scams", 
            "Launch of tokens", 
            "A type of initial funding for projects using cryptocurrency", 
            "Delegating stake and exchange of rewards for initial capital of a project"],
        correctAnswer: "A type of initial funding for projects using cryptocurrency",
        selectedAnswer: '',
        dropdown: "See a formal definition for an ICO (Initial coin offering).",
        explanation: `
        <a href="https://en.wikipedia.org/wiki/Initial_coin_offering" target="_blank">
        (Wikipedia.org, Initial coin offering)</a>, <i>"An initial coin offering (ICO) or initial currency offering is a type of funding using cryptocurrencies. 
        It is often a form of crowdfunding, although a private ICO which does not seek public investment is also possible. In an ICO, a quantity of cryptocurrency is sold in the 
        form of "tokens" ("coins") to speculators or investors, in exchange for legal tender or other (generally established and more stable) cryptocurrencies such as Bitcoin or 
        Ether."</i> .. <i>"An ICO can be a source of capital for startup companies. ICOs can allow startups to avoid regulations that prevent them from seeking investment directly 
        from the public, and intermediaries such as venture capitalists, banks, and stock exchanges, which may demand greater scrutiny and some percentage of future profits 
        or joint ownership." </i>
        ICOs are a mechanism to achieve funding for new projects and companies with cryptocurrencies.`,
        category: ['Tokens']
    },
    {
        question: "What is the Ethereum contract(s) ABI (application binary interface) purpose?",
        answers: 
        [   "An application binary interface is an interface between the operating system and user programs.", 
            "The ABI is used to encode contract calls for the EVM and to read data.", 
            "The purpose of the ABI is to describe how each function in the contract will accept arguments and define how they can be invoked.", 
            "High-level readable source code."],
        correctAnswer: "The purpose of the ABI is to describe how each function in the contract will accept arguments and define how they can be invoked.",
        selectedAnswer: '',
        dropdown: "See an explanation for the ABI.",
        explanation: `
        <a href="https://github.com/ethereumbook/ethereumbook/blob/develop/07smart-contracts-solidity.asciidoc#the-ethereum-contract-abi" target="_blank">
        (Mastering Ethereum, pg 134, Chapter 7 Smart Contracts and Solidity, The Ethereum Contract ABI)</a>, <i>"In Ethereum, the ABI is used to encode contract calls for the EVM and to read data out 
        of transactions. The purpose of an ABI is to define the functions in the contract that can be invoked and describe how each function will accept arguments and return its result."</i>
        An ABI is an acronym for application binary interface however the definition is not it's purpose, specifically for smart contracts.`,
        category: ['Solidity']
    },
    {
        question: "Dapps and smart contract user interfaces are typically built with frontend web design. (True or false)",
        answers: 
        [   "True",
            "False"],
        correctAnswer: "True",
        selectedAnswer: '',
        dropdown: "See an explanation for how dapps are interacted with.",
        explanation: `Smart contracts are developed as the backend and business-logic of the mechanisms of how the application fundamentally works the
        agreements it's intending to execute. The client side interface of a DAPP typically uses the standard web technologies and tech-stacks
        that most developers are somewhat familiar with. <a href="https://github.com/ethereumbook/ethereumbook/blob/develop/12dapps.asciidoc#frontend-web-user-interface" target="_blank">
        (Mastering Ethereum, pg 134, Chapter 12 Decentralized Applications (DApps), Frontend (Web User Interface))</a>, <i>"ke the business logic of the DApp, which requires a developer to understand the EVM and new languages such as Solidity, 
        the client-side interface of a DApp can use standard web technologies (HTML, CSS, JavaScript, etc.). 
        This allows a traditional web developer to use familiar tools, libraries, and frameworks. Interactions with Ethereum, 
        such as signing messages, sending transactions, and managing keys, are often conducted through the web browser, via an extension 
        such as MetaMask"</i>`,
        category: ['Solidity']
    },

    {
        question: "Blockchains and smart contracts are used for storing data. (True or false)",
        answers: 
        [   "True",
            "False"],
        correctAnswer: "False",
        selectedAnswer: '',
        dropdown: "See why smart contracts are not for storing data.",
        explanation: `<a href="https://github.com/ethereumbook/ethereumbook/blob/develop/12dapps.asciidoc#data-storage" target="_blank">
        (Mastering Ethereum, pg 134, Chapter 12 Decentralized Applications (DApps), Data Storage)</a>, <i>"Due to high gas costs and the 
        currently low block gas limit, smart contracts are not well suited to storing or processing large amounts of data. Hence, 
        most DApps utilize off-chain data storage services, meaning they store the bulky data off the Ethereum chain, 
        on a data storage platform. That data storage platform can be centralized (for example, a typical cloud database), 
        or the data can be decentralized, stored on a P2P platform such as the IPFS, or Ethereum’s own Swarm platform."</i>`,
        category: ['Solidity', 'Infrastructure']
    },
    {
        question: "What is referred to or closely defined as a layer 2 protocol?",
        answers: 
        [   "A layer 2 protocol is a seperate blockchain that extends Ethereum, for delegating transactions.",
            "A layer 2 protocol is a solution for reducing gas fees via rollups, which are bundled transactions.",
            "A layer 2 protocol is a chain that inherits the security of Ethereum.",
            "There are zero knowledge rollups, and optimistic rollups which are referred to as layer 2 rollups."],
        correctAnswer: "A layer 2 protocol is a seperate blockchain that extends Ethereum, for delegating transactions.",
        selectedAnswer: '',
        dropdown: "See an an explanation for what a layer 2 protocol is.",
        explanation: `<a href="https://ethereum.org/en/layer-2/" target="_blank">
        (Ethereum.org, How does layer 2 work?)</a>, <i>"As we mentioned above, Layer 2 is a collective term for Ethereum scaling 
        solutions that handle transactions off Ethereum layer 1 while still taking advantage of the robust decentralized security of 
        Ethereum layer 1. A layer 2 is a separate blockchain that extends Ethereum."</i> ... <i>"A layer 2 blockchain regularly 
        communicates with Ethereum (by submitting bundles of transactions) in order to ensure it has similar security and 
        decentralization guarantees. All this requires no changes to the layer 1 protocol (Ethereum). This lets layer 1 handle security, 
        data availability, and decentralization, while layer 2s handles scaling."</i> Rollups are the conventional use case for layer 2s
        - however they are not the only form of implementation for layer 2 protocols. Another example would be state channels, or the Lightning Network for
        bitcoin. `,
        category: ['Solidity', 'Infrastructure'] 
    },
    {
        question: "Asymmmetric cryptography is essential to the payment system of most blockchain/cryptocurrency payment systems, including Ethereum. (True or false)",
        answers: ['True', 'False'],
        correctAnswer: ['True'],
        selectedAnswer: '',
        dropdown: ['See how asymmmetric cryptography is implemented within Ethereum.'],
        explanation: `
        <a href="https://github.com/ethereumbook/ethereumbook/blob/develop/04keys-addresses.asciidoc#public-key-cryptography-and-cryptocurrency" target="_blank">
        (Mastering Ethereum, pg 60, Chapter 4 Cryptography, Public Key Cryptography and Cryptocurrency)</a>, <i>"Public key cryptography (also called "asymmetric cryptography") 
        is a core part of modern-day information security"</i> ...  <i>"Public key cryptography uses unique keys to secure information. These keys are based on mathematical functions that have a special property: 
        it is easy to calculate them, but hard to calculate their inverse. Based on these functions, cryptography enables the creation of digital secrets and unforgeable digital signatures, which are secured by 
        the laws of mathematics."</i> ... <i>"In Ethereum, we use public key cryptography (also known as asymmetric cryptography) to create the 
        public–private key pair we have been talking about in this chapter. They are considered a "pair" because the public key is derived from 
        the private key. Together, they represent an Ethereum account by providing, respectively, a publicly accessible account handle 
        (the address) and private control over access to any ether in the account and over any authentication the account needs when using 
        smart contracts."</i>`,
        category: ['Cryptography']
    },
    {
        question: "Mnemonic seed wallets is the most commonly used and widely known implementation of wallet software.",
        answers: ['True', 'False'],
        correctAnswer: ['True'],
        selectedAnswer: '',
        dropdown: ['See why mnemonics are so useful and widely used.'],
        explanation: `
        Mnemonic phrases are the most secure implementation of securing wallet due to the amount of possible parameters it uses to produce a seed phrase (2^512).
        It is also relatively intuitive compared to other wallet standards. Virtually every wallet provider uses a mnemonic seed phrase as their standard for users
        to create a wallet.
        `,
        category: ['Cryptography', "Wallets"]
    },
    {
        question: "Why are tokens essential to a lot of applications?",
        answers: [
            'Tokens provides a basis of incentive and objective value.',
            "Tokens provide governance.",
            "Tokens provide liquidity to investors",
            'Tokens provide a basis to an applications'],

        correctAnswer: ['Tokens provides a basis of incentive and objective value.'],
        selectedAnswer: '',
        dropdown: ['See why tokens are essential or are a basis to many applications.'],
        explanation: `Tokens are a basis for many applications because they provide inherent extrensic value and incentive mechanisms
        for those who use the service. They can also provide governance aswell, but it's not inherent to the representation
        of value to the ecosystem or incentive mechanism. `,
        category: ['Tokens']
    },
    {
        question: "How do oracles send data on-chain?",
        answers: [
            'An oracle provides data on chain by sending a transaction with the off-chain data in the data payload, typically in a byte-string.',
            "An oracle provides data on chain by sending a transaction",
            "An oracle provides data by calling a function in a contract.",
            'Oracles provide data on chain by sending a transaction with the data and calling that data from in a contract.'],
        selectedAnswer: '',
        correctAnswer: ['An oracle provides data on chain by sending a transaction with the data in the data payload, typically in a byte-string.'],
        dropdown: ['See how oracles send data on chain through a transaction.'],
        explanation: `An oracle provides data by sending a transaction with the off-chain info/data in the payload, and then the contract interprets
        this information with a condition typically. It's in a just-in-time manner, so data (transactions) aren't always being sent to the contract, as it can be
        expensive.`,
        category: ['Oracles']
    },
    {
        question: "When a contract selfdestructs, ERC20 token balances are sent to address specified (True or false)",
        answers: 
        [   "True",
            "False"],
        correctAnswer: "False",
        selectedAnswer: '',
        dropdown: "ERC20 tokens cannot be transfered without interacting with the token contract.",
        explanation: `The selfdestruct opcode works by destroying the current contract and sending
        all of the contract eth to a specified address. It does not call any other contracts, and 
        thus all tokens held by the selfdestructed contract are lost.`,
        category: ['Solidity', 'Tokens']
    },
    {
        question: "ERC20 tokens can expand on the ERC20 standard and still be compliant (True or false)",
        answers: 
        [   "True",
            "False"],
        correctAnswer: "True",
        selectedAnswer: '',
        dropdown: "ERC20 tokens can be expanded in any way as long as they follow the ERC20 spec.",
        explanation: `For a token to be ERC20 compliant, it needs to follow the
        <a href="https://eips.ethereum.org/EIPS/eip-20" target="_blank">ERC20 specifcation</a>.
        A token can include whatever methods are necessary, as long as the mandatory ERC20 methods 
        behave like described in the standard.`,
        category: ['Solidity', 'Tokens']
    },
    {
        question: "EIP-2612 can be used for gasless off-chain approvals. (True or false)",
        answers: 
        [   "True",
            "False"],
        correctAnswer: "True",
        selectedAnswer: '',
        dropdown: "EIP-2612 allows tokens to be approved off-chain.",
        explanation: `<a href="https://eips.ethereum.org/EIPS/eip-2612#Abstract" target="_blank">
        (Martin Lundfall, "EIP-2612: permit – 712-signed approvals [DRAFT]," Ethereum Improvement
        Proposals, no. 2612, April 2020. [Online serial]. Available: https://eips.ethereum.org/EIPS/eip-2612.)</a>, 
        <i>"This ERC extends the ERC-20 standard with a new function permit, which allows users to modify 
        the allowance mapping using a signed message, instead of through msg.sender."</i>`,
        category: ['Solidity', 'Tokens']
    },
    {
        question: "Contracts can be called when they receive tokens by using receive or fallback functions",
        answers: 
        [   "True",
            "False"],
        correctAnswer: "False",
        selectedAnswer: '',
        dropdown: "Receive and fallback functions only work for the networks native token.",
        explanation: `Since contracts cant be called just by a user sending tokens, users should approve the contract and the contract should use transferFrom.`,
        category: ['Solidity', 'Tokens']
    },
    {
        question: "ERC20 names and symbols dont need to be unique.",
        answers: 
        [   "True",
            "False"],
        correctAnswer: "True",
        selectedAnswer: '',
        dropdown: "ERC20 tokens can have any name and symbol.",
        explanation: ` Multiple ERC20 tokens can have the same names and symbols. According to the <a href="https://eips.ethereum.org/EIPS/eip-20" target="_blank">ERC20 specifcation</a>, tokens don't even need to have names or symbols.`,
        category: ['Solidity', 'Tokens']
    },
    {
        question: "How are most oracle networks functioning on Ethereum?",
        answers: 
        [   "They propose a network of multiple parties to attest and aggregate off chain data.",
            "The network consists of a single party to attest and aggregate off chain data.",
            "The network collects and proposes off chain data",
            "Software nodes on Ethereum collect data and propose it to the oracle."],
        correctAnswer: "They propose a network of multiple parties to attest and aggregate data.",
        selectedAnswer: '',
        dropdown: "See how oracle networks function.",
        explanation: `
        Oracle networks typically work in a decentralized manner with multiple parties proposing data, in the form of attestations and aggregation
        to the oracle. Multiple parties are to provide their data to an off-chain registry for it to be validated or to get a mean (average) from 
        different data outcomes. <a href="https://github.com/ethereumbook/ethereumbook/blob/develop/04keys-addresses.asciidoc#public-key-cryptography-and-cryptocurrency" target="_blank">
        (Mastering Ethereum, pg 60, Chapter 4 Cryptography, Public Key Cryptography and Cryptocurrency)</a> <i>"While centralized data or 
        computation oracles suffice for many applications, they represent single points of failure in the Ethereum network. A number of 
        schemes have been proposed around the idea of decentralized oracles as a means of ensuring data availability and the creation of 
        a network of individual data providers with an on-chain data aggregation system."</i> ... <i>"ChainLink has proposed a decentralized 
        oracle network consisting of three key smart contracts—a reputation contract, an order-matching contract, and an aggregation contract—and 
        an off-chain registry of data providers. The reputation contract is used to keep track of data providers' performance. Scores in the 
         reputation contract are used to populate the off-chain registry."</i>`,
        category: ['Oracles']
    },



]


interface question {
    question: string
    answers: string[]
    correctAnswer: string,
    selectedAnswer: string,
    dropdown: string,
    explanation: string,
    category: string[]

}
 
export let questions:question[] = []

// Try to make a component specifically for this.
function getRandQuestions(arr, count, cb) {
	let ques = [...arr];
  for (let i = 0; i < count; i++) {
  	if (!ques.length) ques = [...arr];
    const questionIndex = Math.floor(Math.random() * ques.length); // grabs a random object via index
    const randQuestion = ques.splice(questionIndex, 1)[0]; // actually is the random object
    cb(randQuestion);
	}
}

getRandQuestions(question_list, 5, (question : question) => { // arr is the array object of questions, count is how many questions it's going to grab
  if (question.answers.length > 2) {
    question.answers.sort( () => .5 - Math.random() )
    }
	questions.push(question);
});


const count = {};

// make questionList name camelcase
question_list.forEach(question => {

  // make categories property name plural
  question.category.forEach(category => {
    count[category] = (count[category] ?? 0) + 1;
  });
});
console.log(count)
console.log(question_list.length)
// run `node questions.js`

export default { questions }