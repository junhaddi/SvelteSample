<script>
	export let productId = 100;
</script>

<a href="/">Home</a>

<h1>제품 리스트 페이지</h1>

<ul>
	<a href="/products/1"><li>제품 1</li></a>
	<a href="/products/2"><li>제품 2</li></a>
	<a href="/products/3"><li>제품 3</li></a>
	<a href={`/products/${productId}`}><li>제품 {productId}</li></a>
</ul>
