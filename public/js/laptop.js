import * as THREE from 'three';


// ============================================================
// LAPTOP 3D - NOPAL
// ============================================================

const canvas = document.getElementById('laptopCanvas');
const container = document.getElementById('laptopContainer');

if (!canvas || !container) {

    console.warn('Laptop canvas tidak ditemukan.');

} else {

    // ========================================================
    // SCENE
    // ========================================================

    const scene = new THREE.Scene();


    // ========================================================
    // CAMERA
    // ========================================================

    const camera = new THREE.PerspectiveCamera(
        30,
        container.clientWidth / container.clientHeight,
        0.1,
        100
    );

    /*
     * Kamera dibuat hampir sejajar dengan laptop
     * supaya layar tidak terlihat gepeng.
     */

    camera.position.set(
        0,
        1.25,
        9
    );


    // ========================================================
    // RENDERER
    // ========================================================

    const renderer = new THREE.WebGLRenderer({

        canvas: canvas,

        alpha: true,

        antialias: true

    });


    renderer.setPixelRatio(
        Math.min(
            window.devicePixelRatio,
            2
        )
    );


    renderer.setSize(
        container.clientWidth,
        container.clientHeight
    );


    // ========================================================
    // LIGHT
    // ========================================================

    const ambientLight =
        new THREE.AmbientLight(
            0x416eff,
            2
        );

    scene.add(
        ambientLight
    );


    const blueLight =
        new THREE.PointLight(
            0x008cff,
            8,
            15
        );

    blueLight.position.set(
        0,
        4,
        5
    );

    scene.add(
        blueLight
    );


    const leftLight =
        new THREE.PointLight(
            0x0066ff,
            3,
            12
        );

    leftLight.position.set(
        -5,
        2,
        3
    );

    scene.add(
        leftLight
    );


    const rightLight =
        new THREE.PointLight(
            0x00aaff,
            3,
            12
        );

    rightLight.position.set(
        5,
        2,
        3
    );

    scene.add(
        rightLight
    );


    // ========================================================
    // LAPTOP GROUP
    // ========================================================

    const laptop =
        new THREE.Group();


    laptop.scale.set(
        0.72,
        0.72,
        0.72
    );


    laptop.position.set(
        0,
        -0.05,
        0
    );


    scene.add(
        laptop
    );


    // ========================================================
    // MATERIAL
    // ========================================================

    const bodyMaterial =
        new THREE.MeshStandardMaterial({

            color: 0x070b12,

            metalness: 0.9,

            roughness: 0.25

        });


    const darkMaterial =
        new THREE.MeshStandardMaterial({

            color: 0x020407,

            metalness: 0.8,

            roughness: 0.3

        });


    const keyboardMaterial =
        new THREE.MeshStandardMaterial({

            color: 0x071525,

            emissive: 0x00285c,

            emissiveIntensity: 0.7,

            metalness: 0.5,

            roughness: 0.35

        });


    const blueMaterial =
        new THREE.MeshStandardMaterial({

            color: 0x008cff,

            emissive: 0x0066ff,

            emissiveIntensity: 3,

            metalness: 0.3,

            roughness: 0.2

        });


    // ========================================================
    // LAPTOP BASE
    // ========================================================

    const base =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                5.4,
                0.28,
                3.2
            ),

            bodyMaterial

        );


    base.position.set(
        0,
        0,
        0
    );


    laptop.add(
        base
    );


    // ========================================================
    // BASE BOTTOM
    // ========================================================

    const bottom =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                5.5,
                0.12,
                3.3
            ),

            darkMaterial

        );


    bottom.position.set(
        0,
        -0.18,
        0
    );


    laptop.add(
        bottom
    );


    // ========================================================
    // KEYBOARD
    // ========================================================

    const keyboard =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                4.75,
                0.08,
                2.25
            ),

            keyboardMaterial

        );


    keyboard.position.set(
        0,
        0.18,
        0.12
    );


    laptop.add(
        keyboard
    );


    // ========================================================
    // KEYBOARD KEYS
    // ========================================================

    const keyMaterial =
        new THREE.MeshStandardMaterial({

            color: 0x0a1525,

            emissive: 0x00346e,

            emissiveIntensity: 0.8,

            metalness: 0.3,

            roughness: 0.45

        });


    const rows = 5;

    const columns = 13;

    const keyWidth = 0.28;

    const keyDepth = 0.25;


    const startX = -1.70;

    const startZ = -0.68;


    for (
        let row = 0;
        row < rows;
        row++
    ) {

        for (
            let col = 0;
            col < columns;
            col++
        ) {

            const key =
                new THREE.Mesh(

                    new THREE.BoxGeometry(
                        keyWidth,
                        0.045,
                        keyDepth
                    ),

                    keyMaterial

                );


            key.position.set(

                startX +
                col * 0.285,

                0.245,

                startZ +
                row * 0.30

            );


            laptop.add(
                key
            );

        }

    }


    // ========================================================
    // TRACKPAD
    // ========================================================

    const trackpad =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                1.45,
                0.035,
                0.9
            ),

            new THREE.MeshStandardMaterial({

                color: 0x08111d,

                metalness: 0.7,

                roughness: 0.25

            })

        );


    trackpad.position.set(
        0,
        0.245,
        1.05
    );


    laptop.add(
        trackpad
    );


    // ========================================================
    // FRONT BLUE LIGHT
    // ========================================================

    const frontLight =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                4.9,
                0.035,
                0.045
            ),

            blueMaterial

        );


    frontLight.position.set(
        0,
        -0.02,
        1.62
    );


    laptop.add(
        frontLight
    );


    // ========================================================
    // SCREEN
    // ========================================================

    /*
     * Titik bawah layar = engsel.
     *
     * Layar berdiri dari atas keyboard,
     * bukan menembus ke dalam keyboard.
     */

    const screenGroup =
        new THREE.Group();


    screenGroup.position.set(
        0,
        0.27,
        -1.40
    );


    /*
     * Sedikit miring ke belakang.
     */

    screenGroup.rotation.x =
        -0.06;


    laptop.add(
        screenGroup
    );


    // ========================================================
    // UKURAN LAYAR
    // ========================================================

    const screenWidth = 4.95;

    const screenHeight = 3.0;


    // ========================================================
    // FRAME
    // ========================================================

    const frameMaterial =
        new THREE.MeshStandardMaterial({

            color: 0x020407,

            metalness: 0.9,

            roughness: 0.2

        });


    const frameThickness = 0.16;

    const frameDepth = 0.20;


    // --------------------------------------------------------
    // FRAME ATAS
    // --------------------------------------------------------

    const frameTop =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                screenWidth,
                frameThickness,
                frameDepth
            ),

            frameMaterial

        );


    frameTop.position.set(

        0,

        screenHeight -
        frameThickness / 2,

        0

    );


    screenGroup.add(
        frameTop
    );


    // --------------------------------------------------------
    // FRAME KIRI
    // --------------------------------------------------------

    const frameLeft =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                frameThickness,
                screenHeight,
                frameDepth
            ),

            frameMaterial

        );


    frameLeft.position.set(

        -screenWidth / 2 +
        frameThickness / 2,

        screenHeight / 2,

        0

    );


    screenGroup.add(
        frameLeft
    );


    // --------------------------------------------------------
    // FRAME KANAN
    // --------------------------------------------------------

    const frameRight =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                frameThickness,
                screenHeight,
                frameDepth
            ),

            frameMaterial

        );


    frameRight.position.set(

        screenWidth / 2 -
        frameThickness / 2,

        screenHeight / 2,

        0

    );


    screenGroup.add(
        frameRight
    );


    // --------------------------------------------------------
    // FRAME BAWAH
    // --------------------------------------------------------

    const frameBottom =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                screenWidth,
                frameThickness,
                frameDepth
            ),

            frameMaterial

        );


    frameBottom.position.set(

        0,

        frameThickness / 2,

        0

    );


    screenGroup.add(
        frameBottom
    );


    // ========================================================
    // SCREEN BACKGROUND
    // ========================================================

    const displayWidth =
        screenWidth -
        frameThickness * 2 -
        0.05;


    const displayHeight =
        screenHeight -
        frameThickness * 2 -
        0.05;


    const screenBackground =
        new THREE.Mesh(

            new THREE.PlaneGeometry(
                displayWidth,
                displayHeight
            ),

            new THREE.MeshBasicMaterial({

                color: 0x020711

            })

        );


    screenBackground.position.set(

        0,

        screenHeight / 2,

        0.115

    );


    screenGroup.add(
        screenBackground
    );


    // ========================================================
    // FOTO DI LAYAR
    // ========================================================

    const textureLoader =
        new THREE.TextureLoader();


    const photoTexture =
        textureLoader.load(

            '/images/profile.jpeg',

            function (texture) {

                console.log(
                    'Foto berhasil masuk ke layar laptop.'
                );


                // =================================================
                // PERBAIKAN RASIO FOTO
                // =================================================
                //
                // Foto TIDAK lagi dipaksa mengikuti rasio layar.
                //
                // Sistem ini bekerja seperti:
                //
                // object-fit: cover;
                //
                // Foto akan memenuhi layar tetapi tidak gepeng.
                // Bagian yang berlebih akan dipotong.
                // =================================================

                const imageWidth =
                    texture.image.width;

                const imageHeight =
                    texture.image.height;


                const imageAspect =
                    imageWidth /
                    imageHeight;


                const screenAspect =
                    displayWidth /
                    displayHeight;


                let repeatX = 1;

                let repeatY = 1;


                // ---------------------------------------------
                // FOTO LEBIH LEBAR DARI LAYAR
                // ---------------------------------------------

                if (
                    imageAspect >
                    screenAspect
                ) {

                    repeatX =
                        screenAspect /
                        imageAspect;

                    repeatY = 1;

                }


                // ---------------------------------------------
                // FOTO LEBIH TINGGI DARI LAYAR
                // ---------------------------------------------

                else if (
                    imageAspect <
                    screenAspect
                ) {

                    repeatX = 1;

                    repeatY =
                        imageAspect /
                        screenAspect;

                }


                // ---------------------------------------------
                // CROP FOTO
                // ---------------------------------------------

                texture.wrapS =
                    THREE.ClampToEdgeWrapping;


                texture.wrapT =
                    THREE.ClampToEdgeWrapping;


                texture.repeat.set(
                    repeatX,
                    repeatY
                );


                texture.offset.set(

                    (1 - repeatX) / 2,

                    (1 - repeatY) / 2

                );


                texture.needsUpdate = true;


                // Simpan data untuk animasi foto
                photoCropData.repeatX =
                    repeatX;

                photoCropData.repeatY =
                    repeatY;

                photoCropData.centerX =
                    (1 - repeatX) / 2;

                photoCropData.centerY =
                    (1 - repeatY) / 2;


                photoCropData.ready = true;

            },

            undefined,

            function () {

                console.warn(
                    'Foto /images/profile.jpeg tidak ditemukan.'
                );

            }

        );


    photoTexture.colorSpace =
        THREE.SRGBColorSpace;


    // ========================================================
    // DATA CROP FOTO
    // ========================================================

    const photoCropData = {

        repeatX: 1,

        repeatY: 1,

        centerX: 0,

        centerY: 0,

        ready: false

    };


    // ========================================================
    // FOTO
    // ========================================================

    /*
     * PENTING:
     *
     * Plane foto tetap memakai ukuran layar.
     *
     * Yang diubah bukan ukuran Plane,
     * tetapi UV texture-nya.
     *
     * Dengan cara ini foto tidak akan pernah gepeng.
     */

    const photo =
        new THREE.Mesh(

            new THREE.PlaneGeometry(
                displayWidth - 0.08,
                displayHeight - 0.08
            ),

            new THREE.MeshBasicMaterial({

                map: photoTexture,

                transparent: true,

                opacity: 0.96

            })

        );


    photo.position.set(

        0,

        screenHeight / 2,

        0.14

    );


    screenGroup.add(
        photo
    );


    // ========================================================
    // BLUE SCREEN EFFECT
    // ========================================================

    const blueOverlay =
        new THREE.Mesh(

            new THREE.PlaneGeometry(
                displayWidth - 0.08,
                displayHeight - 0.08
            ),

            new THREE.MeshBasicMaterial({

                color: 0x0066ff,

                transparent: true,

                opacity: 0.07,

                blending:
                    THREE.AdditiveBlending

            })

        );


    blueOverlay.position.set(

        0,

        screenHeight / 2,

        0.155

    );


    screenGroup.add(
        blueOverlay
    );


    // ========================================================
    // WEBCAM
    // ========================================================

    const webcam =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                0.035,
                16,
                16
            ),

            new THREE.MeshBasicMaterial({
                color: 0x008cff
            })

        );


    webcam.position.set(

        0,

        screenHeight +
        0.075,

        0.16

    );


    screenGroup.add(
        webcam
    );


    // ========================================================
    // HINGE
    // ========================================================

    const hinge =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                4.2,
                0.18,
                0.22
            ),

            darkMaterial

        );


    hinge.position.set(

        0,

        0.25,

        -1.40

    );


    laptop.add(
        hinge
    );


    // ========================================================
    // HINGE BLUE LIGHT
    // ========================================================

    const hingeLight =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                3.5,
                0.025,
                0.025
            ),

            blueMaterial

        );


    hingeLight.position.set(

        0,

        0.34,

        -1.51

    );


    laptop.add(
        hingeLight
    );


    // ========================================================
    // GLOW DI BAWAH LAPTOP
    // ========================================================

    const glow =
        new THREE.Mesh(

            new THREE.CircleGeometry(
                3.6,
                64
            ),

            new THREE.MeshBasicMaterial({

                color: 0x0066ff,

                transparent: true,

                opacity: 0.13

            })

        );


    glow.rotation.x =
        -Math.PI / 2;


    glow.position.set(
        0,
        -0.32,
        0
    );


    laptop.add(
        glow
    );


    // ========================================================
    // MOUSE
    // ========================================================

    let targetRotationX = 0;

    let targetRotationY = 0;

    let currentRotationX = 0;

    let currentRotationY = 0;


    document.addEventListener(
        'mousemove',
        function (event) {

            const mouseX =
                (
                    event.clientX /
                    window.innerWidth
                ) * 2 - 1;


            const mouseY =
                (
                    event.clientY /
                    window.innerHeight
                ) * 2 - 1;


            targetRotationY =
                mouseX * 0.14;


            targetRotationX =
                mouseY * 0.035;

        }
    );


    // ========================================================
    // ANIMATION
    // ========================================================

    const clock =
        new THREE.Clock();


    function animate() {

        requestAnimationFrame(
            animate
        );


        const time =
            clock.getElapsedTime();


        // ----------------------------------------------------
        // MOUSE ROTATION
        // ----------------------------------------------------

        currentRotationX +=
            (
                targetRotationX -
                currentRotationX
            ) * 0.04;


        currentRotationY +=
            (
                targetRotationY -
                currentRotationY
            ) * 0.04;


        laptop.rotation.x =
            currentRotationX;


        laptop.rotation.y =
            currentRotationY;


        // ----------------------------------------------------
        // FLOATING
        // ----------------------------------------------------

        laptop.position.y =
            -0.05 +
            Math.sin(
                time * 1.1
            ) * 0.025;


        // ----------------------------------------------------
        // FOTO BERGERAK HALUS
        // ----------------------------------------------------
        //
        // Foto tetap berada di dalam layar.
        //
        // Kita menggerakkan posisi UV texture,
        // bukan posisi Plane.
        //
        // Jadi frame laptop tidak ikut bergerak.
        // ----------------------------------------------------

        if (
            photoCropData.ready
        ) {

            const repeatX =
                photoCropData.repeatX;


            const repeatY =
                photoCropData.repeatY;


            const centerX =
                photoCropData.centerX;


            const centerY =
                photoCropData.centerY;


            // -----------------------------------------------
            // Besarnya gerakan otomatis
            // -----------------------------------------------

            const maxMoveX =
                Math.max(
                    0,
                    (1 - repeatX) * 0.28
                );


            const maxMoveY =
                Math.max(
                    0,
                    (1 - repeatY) * 0.28
                );


            // -----------------------------------------------
            // Gerakan kiri kanan
            // -----------------------------------------------

            const movingX =
                Math.sin(
                    time * 0.22
                ) *
                maxMoveX;


            // -----------------------------------------------
            // Gerakan atas bawah
            // -----------------------------------------------

            const movingY =
                Math.cos(
                    time * 0.18
                ) *
                maxMoveY;


            // -----------------------------------------------
            // Terapkan posisi crop
            // -----------------------------------------------

            photoTexture.offset.x =
                centerX +
                movingX;


            photoTexture.offset.y =
                centerY +
                movingY;


            // -----------------------------------------------
            // Gerakan tambahan sangat halus
            // -----------------------------------------------

            photoTexture.offset.x +=
                Math.sin(
                    time * 0.07
                ) *
                maxMoveX *
                0.25;


            photoTexture.offset.y +=
                Math.cos(
                    time * 0.09
                ) *
                maxMoveY *
                0.20;

        }


        // ----------------------------------------------------
        // FOTO ZOOM HALUS
        // ----------------------------------------------------

        const photoScale =
            1 +
            Math.sin(
                time * 0.25
            ) * 0.012;


        photo.scale.set(

            photoScale,

            photoScale,

            1

        );


        // ----------------------------------------------------
        // SCREEN BLUE GLOW
        // ----------------------------------------------------

        blueOverlay.material.opacity =
            0.06 +
            Math.sin(
                time * 1.5
            ) * 0.012;


        // ----------------------------------------------------
        // BLUE LIGHT
        // ----------------------------------------------------

        blueLight.intensity =
            7 +
            Math.sin(
                time * 2
            ) * 1;


        // ----------------------------------------------------
        // CAMERA
        // ----------------------------------------------------

        camera.lookAt(
            0,
            1.35,
            0
        );


        // ----------------------------------------------------
        // RENDER
        // ----------------------------------------------------

        renderer.render(
            scene,
            camera
        );

    }


    // ========================================================
    // RESIZE
    // ========================================================

    function resize() {

        const width =
            container.clientWidth;


        const height =
            container.clientHeight;


        if (
            width <= 0 ||
            height <= 0
        ) {
            return;
        }


        camera.aspect =
            width / height;


        camera.updateProjectionMatrix();


        renderer.setSize(
            width,
            height
        );


        renderer.setPixelRatio(
            Math.min(
                window.devicePixelRatio,
                2
            )
        );

    }


    window.addEventListener(
        'resize',
        resize
    );


    resize();


    animate();

}