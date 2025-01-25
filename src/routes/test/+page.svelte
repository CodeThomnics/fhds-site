<script>
    let rotateX = 0;
    let rotateY = 0;
</script>

<div class="container">
    <div class="box">3D Transform</div>
</div>

<style>
    .container {
        perspective: 1000px;
        padding: 50px;
    }

    .box {
        width: 200px;
        height: 200px;
        background-color: #3498db;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        /* Example of matrix3d transform */
        transform: matrix3d(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        );
        /* Add some animation */
        animation: rotate3d 5s infinite linear;
    }

    @keyframes rotate3d {
        from {
            transform: matrix3d(
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
            );
        }
        to {
            transform: matrix3d(
                1, 0, 0, 0,
                0, 1, 1, 0,
                0, -0.5, 1, 0,
                0, 0, 0, 1
            );
        }
    }
</style>