<template>
  <div>
    <qrcode-stream @decode="onDecode" :track="drawOutline" @init="onInit" ></qrcode-stream>

      <p class="error">{{ error }}</p>

    <!-- <p class="decode-result">Last result: <b><a :href="result.name">{{result.name}}</a></b>   </p>-->
   
    <b>link: <a :href="result.url">{{result.url}}</a></b>

        <!-- <b>name: {{result.name}}</b> -->
 
   
  </div>
</template>

<script>
import { QrcodeStream } from "vue3-qrcode-reader";
export default {
  components: {
    QrcodeStream,
  },
 data () {
    return {
      result: {
          name: 'kurt',
          url: ''
      },
      error: ''
    }
  },
  methods: {
   onDecode (result ) {
      this.result.url = result
        console.log('result', result)
    },
async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permission"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        } else if (error.name === 'InsecureContextError') {
          this.error = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
        } else {
          this.error = `ERROR: Camera error (${error.name})`;
        }
      }
    },
    drawOutline(decodeData, context) {
      var points = [];
      console.log(decodeData);

      for (var k in decodeData) {
        switch (k) {
          case "topLeftCorner":
            points[0] = decodeData[k];
            break;
          case "topRightCorner":
            points[1] = decodeData[k];
            break;
          case "bottomRightCorner":
            points[2] = decodeData[k];
            break;
          case "bottomLeftCorner":
            points[3] = decodeData[k];
            break;

          default:
            break;
        }
      }

        context.lineWidth = 10
        context.strokeStyle = "green";
        context.beginPath();
        console.log(points[0])

        context.moveTo(points[0].x, points[0].y);

        for (const { x, y } of points) {
          context.lineTo(x, y);
        }
        context.lineTo(points[0].x, points[0].y);
        context.closePath();
        context.stroke();
      
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
