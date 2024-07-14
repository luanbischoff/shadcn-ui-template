import {
  ChevronLeft,
  ChevronRight,
  Copy,
  File,
  ListFilter,
  MoreVertical,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import AsideMenu from "@/components/aside-menu";
import NavMenu from "@/components/nav-menu";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: `%s - ${siteConfig.name}`,
  },
};

export default function AccountCreation() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <AsideMenu></AsideMenu>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <NavMenu></NavMenu>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card
                className="cursor-default sm:col-span-2"
                x-chunk="dashboard-05-chunk-0"
              >
                <CardHeader className="pb-3">
                  <CardTitle>🟢 Samara Oliveira</CardTitle>
                  <CardDescription className="text-balance max-w-lg leading-relaxed">
                    Criado em: 01/02/2024. Ativo à 0 horas.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href="criar-conta">
                    <Button>Criar outra Conta</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-1" className="cursor-default">
                <CardHeader className="pb-2">
                  <CardDescription>Esta semana</CardDescription>
                  <CardTitle className="text-4xl">50 contas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +25% desde semana passada.
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={25} aria-label="25% increase" />
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-2" className="cursor-default">
                <CardHeader className="pb-2">
                  <CardDescription>Este mês</CardDescription>
                  <CardTitle className="text-4xl">137 contas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +10% desde último mês.
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={12} aria-label="12% increase" />
                </CardFooter>
              </Card>
            </div>
            <Tabs defaultValue="today">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="today">Hoje</TabsTrigger>
                  <TabsTrigger value="week">Semana</TabsTrigger>
                  <TabsTrigger value="month">Mês</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 gap-1 text-sm"
                      >
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Filtrar</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Ativo
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Banido
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Em revisão
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Desbanido
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 gap-1 text-sm"
                  >
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Export</span>
                  </Button>
                </div>
              </div>
              <TabsContent value="today">
                <Card x-chunk="dashboard-05-chunk-3" className="cursor-default">
                  <CardHeader className="px-7">
                    <CardTitle>Contas</CardTitle>
                    <CardDescription>
                      Contas recentes criadas por você.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Nome</TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Tipo
                          </TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Status
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Criado em
                          </TableHead>
                          <TableHead className="text-right">Número</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="cursor-pointer">
                        <TableRow className="bg-accent">
                          <TableCell>
                            <div className="font-medium">Samara Oliveira</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              Luan Felipe Bischoff
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <span className="rounded-full bg-blue-500 px-3 py-0.5">
                              Físico
                            </span>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              <span className="flex items-center gap-1.5">
                                <span className="block h-2 w-2 rounded-full bg-green-500">
                                  &nbsp;
                                </span>
                                Ativo
                              </span>
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            01/02/2024
                          </TableCell>
                          <TableCell className="text-right">
                            +51 99876-5432
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Vitória Nunes</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              Luan Felipe Bischoff
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <span className="rounded-full bg-blue-500 px-3 py-0.5">
                              Físico
                            </span>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              <span className="flex items-center gap-1.5">
                                <span className="block h-2 w-2 rounded-full bg-green-500">
                                  &nbsp;
                                </span>
                                Ativo
                              </span>
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            01/02/2024
                          </TableCell>
                          <TableCell className="text-right">
                            +51 99876-5432
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Júlia Araujo</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              Luan Felipe Bischoff
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <span className="rounded-full bg-blue-500 px-3 py-0.5">
                              Físico
                            </span>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              <span className="flex items-center gap-1.5">
                                <span className="block h-2 w-2 rounded-full bg-green-500">
                                  &nbsp;
                                </span>
                                Ativo
                              </span>
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            01/02/2024
                          </TableCell>
                          <TableCell className="text-right">
                            +51 99876-5432
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Rafaela Oliveira</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              Luan Felipe Bischoff
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <span className="rounded-full bg-blue-500 px-3 py-0.5">
                              Físico
                            </span>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              <span className="flex items-center gap-1.5">
                                <span className="block h-2 w-2 rounded-full bg-green-500">
                                  &nbsp;
                                </span>
                                Ativo
                              </span>
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            01/02/2024
                          </TableCell>
                          <TableCell className="text-right">
                            +51 99876-5432
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Giovana Machado</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              Luan Felipe Bischoff
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <span className="rounded-full bg-blue-500 px-3 py-0.5">
                              Físico
                            </span>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              <span className="flex items-center gap-1.5">
                                <span className="block h-2 w-2 rounded-full bg-green-500">
                                  &nbsp;
                                </span>
                                Ativo
                              </span>
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            01/02/2024
                          </TableCell>
                          <TableCell className="text-right">
                            +51 99876-5432
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <Card
              className="cursor-default overflow-hidden"
              x-chunk="dashboard-05-chunk-4"
            >
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                    T01-PROP-ZAP1-5432-AGENDA112-01-02
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Copy className="h-3 w-3" />
                      <span className="sr-only">Copiar nomenclatura</span>
                    </Button>
                  </CardTitle>
                  <CardDescription className="font-semibold">
                    +51 99876-5432
                  </CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <Button size="sm" variant="outline" className="h-8 gap-1">
                    <Copy className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                      Copiar nome
                    </span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <MoreVertical className="h-3.5 w-3.5" />
                        <span className="sr-only">Mais</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Exportar</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Deletar</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold">Operador</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Nome</dt>
                      <dd>Luan Felipe Bischoff</dd>
                    </div>
                  </dl>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Sockpuppet (Perfil)</div>
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Nome</span>
                      <span>Samara Oliveira</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Data de nascimento
                      </span>
                      <span>09/08/2000</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">CPF</span>
                      <span>000.000.000-00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Estado</span>
                      <span>RS</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Foto de perfil
                      </span>
                      <span>Abrir imagem</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Recado</span>
                      <span>Lorem ipsum dolor sit amet.</span>
                    </li>
                  </ul>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Informações do chip</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Tipo</dt>
                      <dd className="rounded-full bg-blue-500 px-3 py-0.5">
                        Físico
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Status</dt>
                      <dd className="flex items-center gap-1.5">
                        <span className="block h-2 w-2 rounded-full bg-green-500">
                          &nbsp;
                        </span>
                        Ativo
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">ID</dt>
                      <dd>7001</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Número</dt>
                      <dd>
                        <a href="tel:">+51 99876-5432</a>
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Dispositivo</dt>
                      <dd>TABLET 01</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Instância</dt>
                      <dd>PROPRIETÁRIO</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Criado em</dt>
                      <dd>01/02/2024</dd>
                    </div>
                  </dl>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                <Pagination className="ml-auto mr-0 w-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span className="sr-only">Previous Order</span>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="sr-only">Next Order</span>
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
