<!DOCTYPE html>
<html>
<head>
<title>Fetch API</title>
</head>
<body>

<script type="text/javascript">
fetch("https://jsonplaceholder.typicode.com/users")
.then((res) =>{
    return res.json();
})
.then((data) => console.log(data))
.then((error)=> console.log("Error",error));
</script>
</body>
</html>
