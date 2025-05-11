type T_Props = {
  params: Promise<{ id: string }>;
};

const GamePage = async ({ params }: T_Props) => {
  const { id } = await params;

  return <div>game ID: {id}</div>;
};

export default GamePage;
