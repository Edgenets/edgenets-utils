import crypto from "crypto";

/**
 * 工具类：用于生成随机 ID（字符串/数字），支持自定义字符集与时间戳融合策略。
 */
export class NanoIdUtil {
  /**
   * 默认字符集：URL 安全（a-z, A-Z, 0-9）
   */
  private static readonly DEFAULT_CHARS =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  /**
   * 从 crypto 中生成指定长度的安全随机字符串。
   * @param length 字符串长度，必须 > 0
   * @param chars 自定义字符集，默认使用 DEFAULT_CHARS
   */
  public static generate(
    length: number,
    chars: string = NanoIdUtil.DEFAULT_CHARS,
  ): string {
    if (length <= 0) {
      throw new Error("Length must be greater than 0");
    }

    const bytes = crypto.randomBytes(length);
    return Array.from({ length }, (_, i) => {
      const index = bytes[i] % chars.length;
      return chars[index];
    }).join("");
  }

  /** 使用默认字符集生成随机 ID */
  public static generateDefault(length: number): string {
    return this.generate(length);
  }

  /** 使用自定义字符集生成随机 ID */
  public static generateCustom(length: number, chars: string): string {
    return this.generate(length, chars);
  }

  /**
   * 生成时间戳 + 随机数构成的数字型 ID（默认长度为 16 位）
   * - 头部 4 位 = 2025 年后的第 N 天（去除高位）
   * - 中部 4 位 = 当天第 N 分钟（共 1440 分钟）
   * - 尾部为纯数字随机段
   * - 如果结果以 0 开头，自动替换为 1
   */
  public static generateNumberId(length: number = 8): number {
    const now = new Date();
    const start = new Date("2025-01-01T00:00:00Z");
    const daysSince = Math.floor(
      (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
    );
    const minutesOfDay = now.getHours() * 60 + now.getMinutes();

    const dayPart = daysSince.toString().slice(-4).padStart(4, "0");
    const minutePart = minutesOfDay.toString().padStart(4, "0");
    const randomPart = this.generate(length, "0123456789");

    let id = `${dayPart}${minutePart}${randomPart}`;
    if (id.startsWith("0")) id = "1" + id.slice(1);

    return Number(id);
  }
}
