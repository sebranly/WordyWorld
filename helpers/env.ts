const getFromEnv = (key: string) => process.env[key] || "";

export { getFromEnv };
