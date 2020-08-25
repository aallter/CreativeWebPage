<?php
include_once ("header.php");
?>
<h2>Write to me</h2>
<form action="">

    <!-- Hidden Required Fields -->
    <input type="hidden" name="project_name" value="Creative WebPage"/>
    <input type="hidden" name="admin_email" value="admin@mail.com"/>
    <input type="hidden" name="form_subject" value="Form Contact Message"/>
    <!-- END Hidden Required Fields -->

    <input required pattern="^\S+@\S+\.\S+$" type="email" name="mail" placeholder="Email">
    <input required pattern="^[A-za-zА-Яа-я]{1,}\s[A-za-zА-Яа-я]{1,}\s[A-za-zА-Яа-я]{1,}$" type="text" name="name" placeholder="Name">
    <textarea required pattern="^[A-za-zА-Яа-я]$" name="massage" id="" rows="3" placeholder="Message"></textarea>
    <input type="submit" value="Send" class="submit-button">
</form>
<?php
include_once ("footer.php");
?>

