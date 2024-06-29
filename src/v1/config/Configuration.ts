import * as process from 'node:process';

export default() => ({
    port: parseInt(process.env.PORT) || 3000,
    xToken: process.env.X_TOKEN,
    monobankClientInfoUrl: process.env.MONO_CLIENTINFO_URL,
    monobankStatementUrl: process.env.MONO_STATEMENT_URL,
    account: process.env.JAR_ACCOUNT,
})