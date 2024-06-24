import * as process from 'node:process';

export default() => ({
    port: parseInt(process.env.PORT) || 3000,
    xToken: process.env.X_TOKEN,
    monobankClientInfoUrl: process.env.MONO_CLIENTINFO_UTL,
    monobankStatementUrl: process.env.MONO_STATEMENT_URL,
    jarAccount: process.env.JAR_ACCOUNT,
})