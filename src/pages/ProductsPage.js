import axios from "axios";

// const token =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NjE2MjI0NTIsImV4cCI6MTU5MzE1ODQ1Miwicm9sZXMiOltdLCJpZCI6MTE3MTUyfQ.nBcKjBwW-vzKBtnzbnvviB_4uOwNZNeOr63N1UVLP_WKwjP_LBlN7EFbbOS9yX_WL1RLI-T7n3f63R_Z_nqY7844Ras9ZSaRFhafsEnOCmwkIw3SPX_dwU_G2ud5Izc9wjmild9tgE6gwa527afwoPvJSz_stLGus0AW21HEbFWTFX_Uz_6Sea4zSh5AcISAdZ2shcQ5LPNEzmvVmqJPrlvJF2rtOvSWI7Kx12Hnp0deyuOXAvrmFXQ7-ccAlj4KV7brlKcDxQI7xBetnnKGyegHTKjLax6_v8nJENtmbhyUqZ2Z11B4Kdi3x7v8yVzZYPFAUuHJPeLoGe8-SkMX0K7uJtbvZBUjSQVRpJafyiLVYWT2oc5VZA-vkMXo-XVRH_CkxuQAK3FtckHosKBgy-cIQPfaraTFAsh_GYPbtssafqC_-H2ANF0z2NcDWw22sQVLx5Vtia6OcXi6t5kNre2IxeONHEsPMfhqeNVeJpy7PRoSyppm46N6a-HRqJSFcp44uMVCA9sSk8jQu9IhkTTxf8wZNNgYqKILubms3fqzEcfym2bpc1zI3MnZd0LozalYzHRGmtiEMOnGDrIswaoHBmJmxjQ1V98McC8A699IGaPY1u9FaQNvQvAKg3D2JWP56WSOz10GK-g9LW8px5Mht9AlcdBDUWF8s70oevM";

export default function ProductsPage(props) {
  const user = JSON.parse(localStorage.getItem("user"));

  const getProductList = async () => {
    const response = await axios({
      url: `https://${user.company}.ox-sys.com/security/auth_check`,
      method: "POST",
      data: JSON.stringify({
        size: 1,
        page: 1,
        stock: {
          exist: true,
          location: [42],
        },
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    console.log(response);
  };

  getProductList();

  return <h1>Products Page...</h1>;
}
