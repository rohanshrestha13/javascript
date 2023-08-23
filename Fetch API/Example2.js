<html>
<head>
<title>Fetch API</title>
</head>
<body>

<script type="text/javascript">
fetch("https://jsonplaceholder.typicode.com/users", {
    method:'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        name:"harry"
    })
})
.then((res) => {
    return res.json()
})
.then((data) => console.log(data));
</script>
</body>
</html>
