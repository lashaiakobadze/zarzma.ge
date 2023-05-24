import { AlbumItem } from "@/pages/models/albumItem.interface";
import PageTitle from "../shared/page-title/PageTitle";

interface HandicraftProps {
  HandicraftAlbums: AlbumItem[];
}

const Handicraft: React.FC<HandicraftProps> = ({ HandicraftAlbums }) => {
  return (
    <>
      <PageTitle title={"ხელსაქმე"} center={true} />
    </>
  );
};

export default Handicraft;
