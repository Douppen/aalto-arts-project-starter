import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Heading } from "./ui/heading";
import { getArtworksAction } from "@/backend/controllers/artwork.actions";
import { DeleteArtworkBtn } from "./delete-artwork-btn";

export async function Artworks() {
  const artworks = await getArtworksAction();

  if (artworks.length === 0) {
    return <Heading>No artworks found</Heading>;
  }

  return (
    <div>
      <Heading>Artworks</Heading>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Title</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Artist</TableHeader>
            <TableHeader>Delete</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {artworks.map((artwork) => (
            <TableRow key={artwork.id}>
              <TableCell className="font-medium">{artwork.title}</TableCell>
              <TableCell>{artwork.price}€</TableCell>
              <TableCell className="text-zinc-500">{artwork.artist}</TableCell>
              <TableCell>
                <DeleteArtworkBtn id={artwork.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
