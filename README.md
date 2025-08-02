# @edgenets/utils

A shared TypeScript utility library for the Edgenets ecosystem.  
Provides logging, type helpers, environment config, validation, and other reusable tools.

> Designed for Firebase Cloud Functions and pnpm monorepo projects.

## Table of contents

```bash
edgenets-utils/
├── src/
│   ├── assert/        → 运行时断言，辅助强制类型收窄
│   ├── env/           → 环境变量获取、校验、缓存
│   ├── logger/        → 日志封装，默认 pino，支持 mockLogger
│   ├── date/          → 时间封装（基于 Intl + dayjs adapter）
│   │   ├── format.ts         # 格式化相关函数
│   │   ├── diff.ts           # 时间差计算
│   │   └── index.ts          # 模块导出
│   ├── errors/        → 异常封装
│   │   ├── codes.ts          # 错误枚举 ErrorCode
│   │   ├── messages.ts       # 可选：错误码 → 默认提示
│   │   ├── app-error.ts      # 错误基类 AppError
│   │   └── index.ts          # 统一导出
│   ├── validation/    → 基于 zod，但可插拔（保持 adapter 模式）
│   ├── constants/     → 项目常量、枚举（跨模块复用）
│   ├── types/         → 基础类型工具（如 DeepPartial、Awaitable）
│   ├── string/        → 字符串工具，如 slug、uuid 等
│   ├── array/         → 数组处理，如 groupBy、uniqueBy
│   ├── object/        → 对象深拷贝、merge 等
│   └── index.ts       → 仅 re-export，核心 API 明确暴露
├── .gitignore
├── package.json       # name: @edgenets/utils
├── tsconfig.json
└── README.md
```

## Usage

### Error handling

```typescript
import { AppError, ErrorCode } from '@edgenets/utils'

function checkToken(token?: string) {
  if (!token) {
    throw new AppError(ErrorCode.AUTH_VAL_TOKEN_INVALID)
  }
}
```