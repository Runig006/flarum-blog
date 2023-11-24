<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
    <channel>
        <title>{{$title}}</title>
        <description>{{$description}}</description>
        <link>{{$url}}</link>
        @foreach($discussions as $d)
            <item>
            @foreach($d as $property => $value)
                <{{$property}}>{{$value}}</{{$property}}>
            @endforeach
            </item>
        @endforeach
    </channel>
</rss>