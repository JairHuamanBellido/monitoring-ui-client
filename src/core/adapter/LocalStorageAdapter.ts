import { Nulleable } from "core/types/CommonTypes";

export class LocalStorageAdapter {
  public static readonly id: Nulleable<string> = localStorage.getItem("id");

  public static readonly token: Nulleable<string> = localStorage.getItem("token");
  
  public static addValue(payload: { key: string; value: string }): void {
    localStorage.setItem(payload.key, payload.value);
  }
}
