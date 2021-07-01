<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Flex\Response as FlexResponse;

class FirstController

{
    /**
     *  @Route("/")
     */

    public function homepage()
    {
        return new Response('Olá, Mundo');
    }

    /**
     * @Route("/mamifero/{slug}")
     */

    public function show($slug)
    {
        return new Response(
            sprintf(
                'Esta é a página de datalhe do mamífero "%s" ',
                ucwords( str_replace('-', ' ', $slug) )
            ));
    }

}
