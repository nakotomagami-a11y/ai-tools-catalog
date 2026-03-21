import Head from "next/head";
import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import { CatalogPage } from "@modules/catalog/components/CatalogPage";
import { ToolsData } from "@shared/types/tool";

interface HomeProps {
  data: ToolsData;
}

export default function Home({ data }: HomeProps) {
  return (
    <>
      <Head>
        <title>Free AI Tools Catalog</title>
        <meta name="description" content="A curated catalog of the best free AI tools for developers, designers, and creators." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CatalogPage data={data} />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const filePath = path.join(process.cwd(), "data", "tools.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const data: ToolsData = JSON.parse(raw);
  return { props: { data } };
};
