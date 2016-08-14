/*
 Animation
 --------------------------
 1. Draw the following graphics using canvas (see Picture1.png, Picture2.png, Picture3.png)

 */
(function () {
    var offset = 20;

    function PIX(id, picWidth, picHeight, offset) {
        var canvas;

        canvas = document.getElementById(id);
        canvas.width = picWidth + 2 * offset;
        canvas.height = picHeight + 2 * offset;

        return canvas;
    }

    //Helpers
    //==================================================================================================================
    CanvasRenderingContext2D.prototype.drawEllipse = function (x, y, a, b) {
        this.save();
        this.beginPath();
        this.translate(x, y);
        this.scale(a / b, 1);
        this.arc(0, 0, b, 0, Math.PI * 2, true);
        this.restore();
        this.closePath();
    };



    //==================================================================================================================
    var pic1Canvas = new PIX('pic1', 250, 355, offset);
    var pic1 = pic1Canvas.getContext('2d');

    var pic2 = new PIX('pic2', 540, 340, offset);
    var pic3 = new PIX('pic3', 460, 600, offset);


    //PIC 1
    //==================================================================================================================
    pic1.translate(pic1Canvas.width / 2, pic1Canvas.height / 2);

    //head
    // pic1.drawEllipse(-104, 22, 46, 100);
    pic1.drawEllipse(8.5, 76.5, 115, 100);
    pic1.fillStyle = '#90c0d7';
    pic1.fill();
    pic1.lineWidth = 3;
    pic1.strokeStyle = '#22545f';
    pic1.stroke();
    pic1.closePath();

    //left eye
    pic1.drawEllipse(-60.5, 39, 20, 14);
    pic1.lineWidth = 4;
    pic1.strokeStyle = '#22545f';
    pic1.stroke();
    pic1.drawEllipse(-67, 39, 6, 10);
    pic1.fillStyle = '#22545f';
    pic1.fill();
    pic1.closePath();

    //right eye
    pic1.drawEllipse(27, 39, 20, 14);
    pic1.lineWidth = 4;
    pic1.strokeStyle = '#22545f';
    pic1.stroke();
    pic1.drawEllipse(20, 39, 6, 10);
    pic1.fillStyle = '#22545f';
    pic1.fill();
    pic1.closePath();

    // nose
    pic1.beginPath();
    pic1.moveTo(-17, 40.5);
    pic1.lineTo(-42, 89.5);
    pic1.lineTo(-17, 89.5);
    pic1.lineWidth = 4;
    pic1.strokeStyle = '#22545f';
    pic1.stroke();
    pic1.closePath();

    pic1.save();

    // mouth
    pic1.translate(-17, 126.5);
    pic1.rotate(Math.PI / 20); //rotate
    pic1.drawEllipse(0, 0, 45.5, 15.5);
    pic1.lineWidth = 4;
    pic1.strokeStyle = '#22545f';
    pic1.stroke();
    pic1.closePath();

    pic1.restore();

    // return canvas center

    pic1.save();

    //hat
    pic1.drawEllipse(0, -14, 126, 25.5);
    pic1.lineWidth = 4;
    pic1.strokeStyle = '#262626';
    pic1.stroke();
    pic1.fillStyle = '#396693';
    pic1.fill();
    pic1.closePath();

    pic1.beginPath();
    pic1.moveTo(-57,-33);
    pic1.lineTo(-57, -150.5);
    pic1.lineTo(74.5,-150.5);
    pic1.lineTo(74.5, -33);
    pic1.bezierCurveTo(74.5, -33, 9,0,-57,-33);
    pic1.lineWidth = 4;
    pic1.strokeStyle = '#262626';
    pic1.stroke();
    pic1.fillStyle = '#396693';
    pic1.fill();
    pic1.closePath();

    pic1.beginPath();
    pic1.drawEllipse(9, -150.5, 66, 22);

    pic1.lineWidth = 4;
    pic1.strokeStyle = '#262626';
    pic1.stroke();
    pic1.fillStyle = '#396693';
    pic1.fill();
    pic1.closePath();

    pic1.restore();

    //PIC 2
    //==================================================================================================================

    //PIC 3
    //==================================================================================================================


})();