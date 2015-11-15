<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="author" content="Erica Remmele">
<title>MICA GD Redesign Styleguide</title>
<link rel="stylesheet" type="text/css" href="global.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
<style>
html {
    background-color: #1C1C1C;
}

.pattern-container {
    /*width: 98%;*/
    max-width: 1218px;
    margin: 0 auto;
    overflow: hidden;
}

.pattern {
    position: relative;
    padding-top: 50px;
    padding-bottom: 50px;
    clear: both;
    overflow: hidden;
}
.pattern + .pattern {
    border-top: 1px solid #6DD2C9;
}
.pattern .display {
    width: 65%;
    float: left;
}
.pattern .source {
    position: relative;
    z-index: 100;
    width: 30%;
    float: right;
}
.pattern .source textarea {
    width: 90%;
    border: 1px solid #999;
    font-size: 12px;
    line-height: 1;
    font-family: monospace;
    background: #fff;
}
</style>
</head>
<body>

    <div class="pattern-container">
        <?php
        $files = array();
        $handle=opendir('patterns');
        while (false !== ($file = readdir($handle))):
            if(substr($file, -5) == '.html'):
                $files[] = $file;
            endif;
        endwhile;
        sort($files);
        foreach ($files as $file):
            echo '<div class="pattern">';
            echo '<div class="display">';
            include('patterns/'.$file);
            echo '</div>';
            echo '<div class="source">';
            echo '<textarea rows="6" cols="30">';
            echo htmlspecialchars(file_get_contents('patterns/'.$file));
            echo '</textarea>';
            echo '<p><a href="patterns/'.$file.'">'.$file.'</a></p>';
            echo '</div>';
            echo '</div>';
        endforeach;
        ?>
    </div>

</body>
</html>
