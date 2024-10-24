
import Button from '@/components/Button';
import prisma from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

type props = {
  params: {
    id: string;
  };
};

export default async function PaginaNoticia({ params }: props) {
  const noticia = await prisma.noticia.findUnique({where:{id: params.id}});

  if(!noticia){
    redirect('/');
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <article className='bg-white shadow-md rounded-lg overflow-hidden'>
        <div className='relative w-full h-64 md:h-96'>
          <Image
            src={noticia.imagem}
            alt={noticia.titulo}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='p-6'>
          <h1 className='text-3xl font-bold mb-2'>{noticia.titulo}</h1>
          <p className='text-gray-600 italic mb-4'>{noticia.descricao}</p>
          {noticia.conteudo.split('\n').map((paragraph, index) => (
            <p key={index} className='mb-4'>
              {paragraph}
            </p>
          ))}
        </div>
      </article>
      <div className='mt-8 text-center'>
        <Link href='/'>
          <Button>Voltar para a lista de notícias</Button>
        </Link>
      </div>
    </div>
  );
}

export const dynamic = 'force-static';