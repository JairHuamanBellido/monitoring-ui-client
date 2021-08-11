export class LocalStorageAdapter {
  public static addValue(payload: { key: string; value: string }): void {
    localStorage.setItem(payload.key, payload.value);
  }
  public static getToken(): string {
    return localStorage.getItem("token") as string;
  }

  public static getId(): string {
    return localStorage.getItem("id") as string;
  }
}
