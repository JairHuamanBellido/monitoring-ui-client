export interface UseCase<TUIAdapter, TUseCaseResult> {
  execute?(adapter: TUIAdapter): Promise<TUseCaseResult>;
}
