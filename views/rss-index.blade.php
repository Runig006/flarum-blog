<?xml version="1.0" encoding="UTF-8" ?>
<index>
    @foreach($files as $f)
        <category>
            @foreach($f as $property => $value)
                <{{$property}}>{{$value}}</{{$property}}>
            @endforeach
        </category>
    @endforeach
</index>