const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "arn:aws:s3:::notes-app-2-api-dev-serverlessdeploymentbucket-spf82shnzscc"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://c5voswjxn8.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_e1qIp9gYo",
    APP_CLIENT_ID: "176ob3ok016ca1ldg2fn5na4me",
    IDENTITY_POOL_ID: "us-east-1:4608f31a-c73c-4938-8bd1-27e03f005872"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "arn:aws:s3:::notes-app-api-prod-serverlessdeploymentbucket-3ovkvwckcasa"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://btklcmzfjf.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: " us-east-1_e1qIp9gYo",
    APP_CLIENT_ID: "176ob3ok016ca1ldg2fn5na4me",
    IDENTITY_POOL_ID: "us-east-1:4608f31a-c73c-4938-8bd1-27e03f005872"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
