<?php include '../config/database.php'; ?>
<?php
	session_start();
	$name = $_SESSION['name'];	
?>
<!-- LOGOUT -->
<?php 
	if (isset($_POST['logout'])) {
		// Start the session
session_start();

// Unset all session variables
$_SESSION = array();

// Destroy the session cookie
if (isset($_COOKIE[session_name()])) {
    setcookie(session_name(), '', time() - 42000, '/');
}

// Destroy the session
session_destroy();

// Redirect to the login page
header("Location: ../auth/");
exit();

	}
	if (isset($_POST['submit'])) {
		$content = htmlspecialchars($_POST['content']);
		$category = htmlspecialchars($_POST['category']);

		$query = "INSERT INTO todos (content, category) VALUES (:content, :category)";
		$stmt = $pdo -> prepare($query);

		$stmt -> bindParam(':content', $content);
		$stmt -> bindParam(':category', $category);

		$stmt -> execute();

		$stmt = $pdo -> prepare('SELECT * FROM todos');
		$stmt -> execute();

		$result = $stmt -> fetchAll(PDO::FETCH_ASSOC);
	}


?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>TO DO LIST || PHP</title>
	<link rel="stylesheet" href="style.css" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,700;0,900;1,400&family=Montserrat:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">
</head>
<body>
	<!-- App Wrapper -->
	<main class="app">
		<!-- Greeting -->
		<section class="greeting">
			<h2 class="title">
				What's up, <?php echo $name; ?>
			</h2>
			<form action="" class="logout" method="POST">
				<input type="submit" value="Log Out" name="logout">
			</form>
		</section>
		<!-- End of Greeting -->
		
		<!-- New Todo -->
		<section class="create-todo">
			<h3>CREATE A TODO</h3>
			<form id="new-todo-form" action="<?php $_SERVER['PHP_SELF']; ?>" method="POST">
				<h4>What's on your todo?</h4>
				<input 
					type="text" 
					placeholder="e.g. Get some milk"
					name="content"
					id="content" />
				
				<h4>Pick a category</h4>
				<div class="options">
					<label>
						<input type="radio" name="category" id="category1" value="business" /> 
						<span class="bubble business"></span>
						<div>Business</div>
					</label>
					<label>
						<input type="radio" name="category" id="category2" value="personal" />
						<span class="bubble personal"></span>
						<div>Personal</div>
					</label>
				</div>

				<input type="submit" name="submit" value="Add todo" />
			</form>
		</section>
		<!-- End of New Todo -->

		<!-- Todo List -->
		<section class="todo-list">
			<h3>TODO LIST</h3>
			<div class="list" id="todo-list">
			<?php foreach ($result as $row): ?>
				<div class="todo-item"><?php print_r($row); ?></div>
			<?php  endforeach; ?>
			</div>
		</section>
		<!-- End of Todo List -->

	</main>
	<!-- End of App Wrapper -->
	<script src="main.js"></script>
</body>
</html>