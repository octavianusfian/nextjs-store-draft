import Container from "../global/Container";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4">
      <Container className="flex flex-col gap-6 sm:flex-row sm:justify-center sm:items-center sm:gap-4 flex-wrap py-4">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Octavianus Fian. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
