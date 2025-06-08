// require('dotenv').config()
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     env: {
//         // Reference a variable that was defined in the .env file and make it available at Build Time
//         API_ENDPOINT: process.env.API_ENDPOINT,
//       },
// }

// module.exports = nextConfig

require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 追加: standalone ビルドを有効化
  output: 'standalone',

  // 既存の環境変数設定はそのまま
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
};

module.exports = nextConfig;
