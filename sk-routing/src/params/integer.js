// 라우트 매칭
// 특정 라우터 경로에는 숫자 혹은 정규화된 값만 받고싶을때 정의 파일 요렇게 만들고 폴더이름을 [다이나믹라우트=integer] 요렇게 정의파일이랑 매칭시켜주면 개잘됨
export function match(param) {
	return /^\d+$/.test(param);
}
