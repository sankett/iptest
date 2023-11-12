export async function GET(request: Request) {
    const ip = request.headers.get('x-forwarded-for');
   
    return Response.json({ ip: ip })

}