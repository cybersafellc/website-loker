import { createContext, useEffect, useState } from "react";
import imgNih from "../assets/img/Screenshot 2023-09-13 172504.png";

const Contex = createContext(null);

const Providers = ({ children }) => {
  const [dataAll, setDataALl] = useState([]);
  const seterDataALL = () => {
    setDataALl([
      {
        data: {
          title: "Rumah Makan- Bengkalis",
          company: "Rumah Makan Ridho",
          city: "Bengkalis",
          datePost: "1 hari yang lalu",
          img: imgNih,
          detailPekerjaan: [
            "Menjaga Kebersihan rumah makan",
            "Memantau Kesulurhan Lauk di dalam etalase agar tidak dimaling",
            "Bekerja dengan team",
            "Kerja ship malam/siang",
          ],
          persyaratan: [
            "Ganteng",
            "Laki-Laki",
            "Maximal Umur 30",
            "Berpengalaman bekerja di bidang apapun minimal 1 tahun",
            "Domisili Bengkalis",
          ],
          wa: "081277992021",
        },
      },
      {
        data: {
          title: "Kepala Gudang - Bengkalis",
          company: "PT Raja Darat",
          city: "Bengkalis",
          datePost: "1 hari yang lalu",
          img: imgNih,
          detailPekerjaan: [
            "Menjaga Kebersihan gudang",
            "Memantau Kesulurhan Barang di dalam Gudang agar tetap aman",
            "Bekerja dengan team",
            "Kerja ship malam/siang",
          ],
          persyaratan: [
            "Ganteng",
            "Laki-Laki",
            "Maximal Umur 30",
            "Berpengalaman bekerja di bidang apapun minimal 1 tahun",
            "Domisili Bengkalis",
          ],
          wa: "081277992022",
        },
      },
      {
        data: {
          title: "Supir Pickup - Bengkalis",
          company: "PT Natuna Exspress",
          city: "Bengkalis",
          datePost: "4 hari yang lalu",
          img: imgNih,
          detailPekerjaan: [
            "Menjaga Kebersihan Pickup",
            "Memantau Kesulurhan Ban agar tidak hilang 1",
            "Bekerja dengan team",
            "Kerja ship malam/siang",
          ],
          persyaratan: [
            "Ganteng",
            "Laki-Laki",
            "Maximal Umur 30",
            "Berpengalaman bekerja di bidang apapun minimal 1 tahun",
            "Domisili Bengkalis",
          ],
          wa: "081277992023",
        },
      },
      {
        data: {
          title: "Rakit Nuklir - Bengkalis",
          company: "PT Duar Atom",
          city: "Bengkalis",
          datePost: "7 hari yang lalu",
          img: imgNih,
          detailPekerjaan: [
            "Menjaga Nuklir",
            "Memantau Kesulurhan Barang di gudang pembuatan Nuklir",
            "Bekerja dengan elonMask",
            "Kerja ship malam/siang",
          ],
          persyaratan: [
            "Ganteng",
            "Laki-Laki",
            "Maximal Umur 30",
            "Berpengalaman bekerja di bidang apapun minimal 1 tahun",
            "Domisili Bengkalis",
          ],
          wa: "081277992024",
        },
      },
      {
        data: {
          title: "Office Boy - Bengkalis",
          company: "PT Joni Joni",
          city: "Bengkalis",
          datePost: "10 hari yang lalu",
          img: imgNih,
          detailPekerjaan: ["Menyapu", "Mengepel"],
          persyaratan: [
            "Ganteng",
            "Laki-Laki",
            "Maximal Umur 30",
            "Berpengalaman bekerja di bidang apapun minimal 1 tahun",
            "Domisili Bengkalis",
            "Test Scrool",
            "Test Scrool",
            "Test Scrool",
            "Test Scrool",
            "Test Scrool",
            "Test Scrool",
            "Test Scrool",
            "Test Scrool",
            "Test Scrool",
            "Test Scrool",
            "Test Scrool",
            "Test Scrool",
            "Test Scrool",
            "Test Scrool",
            "Test Scrool",
            "Test Scrool",
            "Test Scrool",
          ],
          wa: "081277992025",
        },
      },
    ]);
  };
  useEffect(() => {
    seterDataALL();
  }, []);
  return <Contex.Provider value={{ dataAll }}>{children}</Contex.Provider>;
};

export { Contex, Providers };
